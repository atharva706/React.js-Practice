function Footer() {
  const data = [
    {
      id: 1,
      name: "Company",
      options: [
        {
          id: 1,
          name: "About Us",
          link: "/about-us",
        },
        {
          id: 2,
          name: "Legal",
          link: "/legal",
        },
        {
          id: 3,
          name: "Careers",
          link: "/career",
        },
        {
          id: 4,
          name: "Contact Us",
          link: "/contact-us",
        },
      ],
    },
    {
      id: 2,
      name: "Explore",
      options: [
        {
          id: 3,
          name: "Practice",
          link: "/practice",
        },
        {
          id: 4,
          name: "Blogs",
          link: "/blog",
        },
      ],
    },
  ];

  return (
    <div className="mainn ">
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            {item.options.map((val) => (
              <p>{val.name}</p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
