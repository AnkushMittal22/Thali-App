import style from "./NewAbout.module.css";
const NewAbout = () => {
  return (
    <div>
      <div className={style.about}>
        <div className={style.aboutapp}>
          <div>
            <h2>About The Thali and How it Works:</h2>
            <br />
            <p>
              The Thali is an Indian food delivery startup restaurant
              aggregator. It primarily provides concrete information, menus, and
              user reviews of the restaurants. Along with this, The Thali also
              has food delivery options from partnered restaurants in the
              selected cities. <br /> <br />
              It operates in 5+ countries with more than 30+ million customers.
              In sixteen years, The Thali has been through a roller-coaster
              ride, seeing all kinds of crests and troughs. From INR 25,000 in
              initial capital to INR 391 crores in revenue in FY2018, from the
              'Dot Com' crash in the early 2000s to the global financial crisis
              of 2008, the company has a story at par with the David v/s Goliath
              legend. It managed to sail through tough times and emerged as a
              winner in the end.
            </p>{" "}
            <br /> <br />
          </div>
          <div>
            <h2>The Thali - Founders & Team:</h2> <br />
            <p>
              The founders of The Thali are Deepinder Goyal and Pankaj Chaddah.
              Both are IIT graduates and were working with Bain & Co in New
              Delhi before they came together to launch The Thali.
            </p>
          </div>

          <div>
            <h2>Deepinder Goyal</h2>
            Deepinder Goyal is an IIT Delhi alumnus. Goyal was not a good
            student back at school but he eventually made his way to the
            prestigious IIT. After completing his graduation, Goyal was hired by
            Bain and Company, where he served as a Senior Associate Consultant
            for a little less than 4 years, after which he founded The Thali.
            Deepinder Goyal has waived off his salary for FY22. This was
            disclosed in a regulatory filing of The Thali dated June 7, 2022.{" "}
            <br /> <br /> <br />
            <h2>Pankaj Chaddah</h2>
            Pankaj Chaddah is a BTech, Mechanical Engineering graduate from IIT
            Delhi. Chaddah completed his graduation and then went to join Bain
            and Company, where he served for two and half years before joining
            Deepinder to found The Thali. However, this co-founder resigned from
            The Thali in May 2018, where he served as a "conscience keeper, and
            a support system during upheavals," as he had described his role,
            for over 10 years. Chaddah founded Shyft (formerly Mindhouse) in
            November 2019, where he currently serves as a Co-founder. Aakriti
            Chopra, one of the early employees of The Thali, has been promoted
            to the Co-founder position. She worked as the Chief People Officer
            when the promotion landed to recognise her contributions to the
            company. Aakriti Chopra is the wife of Albinder Dhindsa, the chief
            of Blinkit, and her promotion came in on June 9, 2022, with the
            signalling of the companies coming closer. So now, the revelation is
            somewhat interesting that the The Thali Co-founder, Aakriti Chopra
            is married to the Founder of Blinkit, Albinder Dhindsa.
          </div>
        </div>
      </div>
      <div className={style.right}>
        <h3>© 2023 The Thali. All Rights Reserved.</h3>
      </div>
    </div>
  );
};
export default NewAbout;
