import React from "react";
import Card from "../components/Card";

import chocolateBarData from "../data/chocolateBarData.jsx";

const Faqs = () => {
  /* This generates a map of component objects with the data stored in chocolateBarData
        already passed into them. It's basically a map of <Card /> components 
    */
  const chocolateBars = chocolateBarData.map((item) => {
    return (
      <Card
        key={item.id} // you need a key element to prevent warning
        {...item}
      />
    );
  });

  return (
    <main>
      <div id="store-header">
        <div id="store-description">
          <h1>FAQs</h1>
          <h3>Do you sell your chocolate?</h3>
          <p>
            Not really, but if you want more and we have some on hand, we'd
            gladly set you up with a few more bars! If you really want to pay
            for them, you can venmo us a few dollars and we'll put it in our
            "new cacao beans fund".
          </p>

          <h3>Why do you make chocolate?</h3>
          <p>
            Our chocolate making comes from a deep intrisic love for chocolate
            and a heart full of gratitude for the good people in our lives with
            whom we can share it.
          </p>

          <p>Pretty much *we're obsessed.</p>
          <p>*Mostly Michael, but we've both had a lot of fun with. it.</p>
          <h3>What chocolate would you recommend and where can I find it?</h3>
          <p>
            Caputos has the world's largest craft chocolate selection, and their
            chocolate orders of any size ship for free. Note, there is a flat
            "Ice & Insulation Fee" so your chocolate doesn't melt.
          </p>
          <p>
            Their selection can be overwhelming, but fear not, we've tasted more
            of their offerings than we care to admit, and here's what we
            recommend.
          </p>
          <h4>Recommendations</h4>
          <p>
            If you're looking for something like ours, check out{" "}
            <a href="https://caputos.com/standout/">Standout Chocolate</a>. We
            source our beans from the same place, we both make two-ingredient
            bars, and our process is very similar. In an unscientific blind
            taste test, their Uganda bar was indistinguishable from ours. They
            make great chocolate! Thus far, we've loved everything we've tried
            from them.{" "}
          </p>
          <h4>Fair warning to the uninitiated: </h4>
          <p>
            Craft chocolate bars retail between $9 and $15, and most bars are
            around 50 grams. If you're buying something we make and have on
            hand, don't hesitate to reach out. Our bars are around 80g and we're
            happy to send one home with you for $4.
          </p>
          <p>
            If you're looking to try something new, here are a few of our
            favorites.
          </p>
          <h4>Regular Dark Chocolate:</h4>
          <p>
            <a href="https://caputos.com/product/goodnow-farms-asochivite-guatemala-77/">
              Goodnow Farms, Guatemala 77%
            </a>
          </p>
          <p>
            <a href="https://caputos.com/product/goodnow-farms-esmeraldas-ecuador-70/">
              Goodnow Farms, Ecuador 70%
            </a>
          </p>
          <p>
            <a href="https://caputos.com/product/solstice-wasatch-blend-chocolate-bar-70/">
              Solstice, Wasatch Blend 70%
            </a>
          </p>
          <p>
            <a href="https://caputos.com/product/solstice-bolivia-chocolate-bar-70/">
              Solstice, Bolivia 70%
            </a>
          </p>
          <p>
            <a href="https://caputos.com/product/amano-madagascar-chocolate-bar/">
              Amano, Madagascar 70%
            </a>
          </p>

          <h4>With Inclusions:</h4>
          <p>
            <a href="https://caputos.com/product/amano-raspberry-rose/">
              Amano, Raspberry Rose 55%
            </a>
          </p>
          <p>
            <a href="https://caputos.com/product/dick-taylor-vanilla-raspberry-72/">
              Dick Taylor, Vanilla Raspberry 72%
            </a>
          </p>
          <p>
            <a href="https://caputos.com/product/standout-chocolate-nordic-nature-spruce-shoots-66/">
              Standout Chocolate, Spruce Shoots 66%
            </a>
          </p>
          <p>
            <a href="https://caputos.com/product/pump-street-bakery-rye-and-milk-chocolate-bar/">
              Pump Street Bakery, Rye and Milk Chocolate bar
            </a>
          </p>
          <h3>How did you get into chocolate making?</h3>
          <p>
            We owe a special debt of gratitude to Aldo and Ann-Elin at Nortico
            Cacao Farm in Costa Rica. We've always LOVED chocolate, but where it
            came from or how it got here was a black box to us. After touring
            their farm and seeing each step of the complex growing and
            fermentation process, for Michael, learning about chocolate became
            like gravity. They sent him home with a small bag of their dried
            cacao beans, and from that point forward he couldn't learn enough
            fast enough. We acquired one machine after another and for the next
            six months, we made a batch of chocolate every other weekend. With
            every batch, the rich smell of freshly ground chocolate permeated
            the halls of Oak Creek Apartments' fourth floor and Catherine came
            as close to angry as Michael has ever seen her from the endless
            droning of our stone melanger smashing nibs into chocolate.
          </p>
          <p>
            Nirtico is where it started, and we wouldn't be here without them.
            If you're ever in Costa Rica, a chocolate tour at Nortico farm is a
            must-do.{" "}
            <a href="https://norticofarm.com">https://norticofarm.com</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Faqs;