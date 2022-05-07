import Stripe from "stripe";

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { mobileApplicationsCount, webPlatformsCount, videosCount } =
      req.body.currentFormData;
    const { android: androidCount, ios: iosCount } = mobileApplicationsCount;

    const androidCost = 500;
    const iosCost = 600;
    const webPlatformCost = 800;
    const videosCost = 900;

    // this array will be used to help avoid quantities that are 0 while looping
    const details = [
      {
        name: "Android Applications",
        unitAmount: androidCost,
        quantity: androidCount,
      },
      {
        name: "iOS Applications",
        unitAmount: iosCost,
        quantity: iosCount,
      },
      {
        name: "Web Applications",
        unitAmount: webPlatformCost,
        quantity: webPlatformsCount,
      },
      {
        name: "Animated Videos",
        unitAmount: videosCost,
        quantity: videosCount,
      },
    ];

    // function to create an array of line items
    const createLineItems = (name, unitAmount, quantity) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name,
          },
          unit_amount: unitAmount * 100, // should be in cents
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity,
      };
    };

    // creating an array of line items by looping over details array
    let lineItems = details.map((item) => {
      // only those item quantity greater than 0 will be processed and will be added to line items array
      if (item.quantity > 0) {
        return createLineItems(item.name, item.unitAmount, item.quantity);
      }
    });

    // removing all the "undefined" items from the "lineItems" array
    // "undefined" is set for those items whose quantity is 0.
    lineItems = lineItems.filter((item) => item !== undefined);

    try {
      const params = {
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "required",
        phone_number_collection: {
          enabled: true,
        },
        line_items: lineItems,
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      console.log(err.message);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
