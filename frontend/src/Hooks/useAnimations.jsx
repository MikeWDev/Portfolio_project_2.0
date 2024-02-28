useEffect(() => {
  const registerAnimations = () => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
      nav,
      .home,
      .about,
      .skill,
      .portfolio,
      .contact-con,
      
      footer
  `,
      {
        interval: 500,
      }
    );
  };

  return registerAnimations();
}, []);
