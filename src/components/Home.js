import featImg from "../assets/img-main.png";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Republic Polytechnic students of Infocomm gathering"
      />

      <h1>{title}</h1>
      <p>
        The youngest polytechnic in Singapore, we aim to model students to be the best version
        of themselves through Design Your Life (DYL). Come and find our more about what our exciting
        courses have for you! Here we have our {" "}   
        <a
          href="https://www.rp.edu.sg/soi/school-awards-ceremony"
          target="_blank"
          rel="noreferrer noopener"
        >
          SOI's success stories 
        </a>
        {" "} for your viewing. School of Infocomm offers 6 full-time PET ICT programmes, recognised by both local and overseas universities; and 4 CET Specialist Diplomas. 
        We offer continuing educational programmes and executive courses for working professionals.
      </p>
    </div>
  );
}
