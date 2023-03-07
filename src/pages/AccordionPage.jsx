import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "dfdsdf",
      label: "What is the React",
      content:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
      id: "fdsfdfdsfd",
      label: "What is the Javascript",
      content:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
    },
    {
      id: "fdkfjkdf",
      label: "What is the css",
      content:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
