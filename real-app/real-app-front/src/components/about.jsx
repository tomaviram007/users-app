import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            About <br />
          </>
        }
      />
      <div className="row">
        <div className="col-lg-12">
          <img
            className="d-block w-100 mt-3"
            src="https://source.unsplash.com/820x362?dogs"
            alt="about image"
          />
          <b>photographer: Mosh Kedem</b>
          <br />
          <br />
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            eveniet laudantium. Natus quia perspiciatis velit nostrum, quibusdam
            deleniti autem libero suscipit quos pariatur, numquam modi
            praesentium nam voluptatem optio. Aperiam? Maxime dolores
            perferendis sit odit, libero animi minus deserunt veritatis
            distinctio assumenda sint, cum quia, maiores ex quos expedita.
            Laborum facere rerum dolores voluptate, tempore assumenda earum
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
