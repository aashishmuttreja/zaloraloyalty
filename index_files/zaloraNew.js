try {
  if (window.Zalora && window.Zalora.jsStore) {
    let email = window.Zalora.jsStore.customer_email;
    let firstname = window.Zalora.jsStore.customer_firstname;
    let lastname = window.Zalora.jsStore.customer_lastname;
    window.YellowMessengerPlugin.sendEvent(
      {
        event: {
          code: "customer_details",
          data: {
            Email: email,
            FirstName: firstname,
            LastName: lastname,
          },
        },
      },
      "*"
    );
  } else {
    console.log("Error inside");
  }
} catch {
  console.log("Error");
}
