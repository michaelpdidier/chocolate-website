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
            "new cacao beans fund" to finance the next batch.
          </p>

          <h3>Why do you make chocolate?</h3>
          <p>
            Our chocolate making comes from a deep intrisic love for chocolate
            and a heart full of gratitude for the good people in our lives with
            whom we can share it.
          </p>

          <p>Pretty much we're* obsessed.</p>
          <p>*Mostly Michael, but we've both had a lot of fun with. it.</p>
          <h3>How did you get into chocolate making?</h3>
          <p>
            The first step in this direction probably started after Michael did
            a chocolate tasting from Tony Caputos. We started enjoying craft
            chocolate and appreciating the world of flavors produced by these
            beans. A few years later we found ourselves in Costa Rica, doing
            every chocolate tour we could find. Just before coming home we
            visited the Nortico cacao farm just outside of Turrialba and from
            that point forward our relationship with chocolate would never be
            the same.
          </p>
          <p>
            We owe a special debt of gratitude to Aldo and Ann-Elin at Nortico.
            We've always LOVED chocolate, but where it came from or how it got
            here was a black box to us. After touring their farm and seeing each
            step of the complex growing and fermentation process, for Michael,
            learning about chocolate became like gravity. They sent him home
            with a small bag of their dried cacao beans, and from that point
            forward he couldn't learn enough fast enough. We acquired one
            machine after another and for the next six months, we made a batch
            of chocolate every other weekend. With every batch, the rich smell
            of freshly ground chocolate permeated the halls of Oak Creek
            Apartments' fourth floor and Catherine came as close to angry as
            Michael has ever seen her from the endless droning of our stone
            melanger smashing nibs into chocolate.
          </p>
          <p>
            Nirtico is where it started, and we wouldn't be here without them.
            If you're ever in Costa Rica, a chocolate tour at Nortico farm is a
            must-do.{" "}
            <a href="https://norticofarm.com">https://norticofarm.com</a>
          </p>

          <h3>
            Terminology: What's the difference between cacao, cocoa, nibs, and
            husks?
          </h3>

          <p>
            The fruit we make chocolate from goes through a series of
            transformations before it becomes the final product we know and
            love.
          </p>
          <p>
            Cacao pods → Beans & flesh harvested → Fermentation → Drying →
            Roasting → Cracking/Winnowing → Grinding → Conching → Tempering →
            Chocolate
          </p>
          <p>
            <strong>Cacao:</strong> refers to the beans before they are roasted.
            It may also refer to the cacao tree or cacao pods, the fresh fruit.{" "}
          </p>
          <p>
            <strong>Cocoa:</strong> refers to the beans after they are roasted.
          </p>
          <p>
            <strong>Nibs/Husk:</strong> when the beans are cracked they are
            broken into two parts, the nibs and the husk. Husks are to cocoa
            beans what shells are to nuts. Nibs are analogous to the nut. Husks
            are used for cocoa tea and nibs make chocolate.
          </p>
          <p>
            <strong>Cocoa mass/cocoa liquor/baking chocolate:</strong> The term
            for nibs after they are ground before they are sweetened and
            conched.
          </p>
          <p>
            <strong>Cocoa butter:</strong> Cocoa beans are roughly 50% fat and
            50% cocoa solids. Cocoa butter is the fat pressed out of the cocoa
            bean.
          </p>
          <p>
            <strong>Cocoa powder:</strong> Is the cocoa solids that are left
            after all of the fat has been pressed out.
          </p>
          <h3>What chocolate would you recommend and where can I find it?</h3>
          <p>
            Caputos has the world's largest craft chocolate selection, and I
            believe their chocolate ships for free.
          </p>
          <p>
            They have a large selection and it can be overwhelming. But, fear
            not, we've tasted more of their offerings than we care to admit, and
            here are a few bars we recommend.
          </p>
          <h4>Recommendations</h4>
          <p>
            If you're looking for something like ours, check out{" "}
            <a href="https://caputos.com/standout/">Standout Chocolate</a>. We
            source our beans from the same place, we both make two-ingredient
            bars, and our process is very similar. When tasted side-by-side,
            their Uganda bar was indistinguishable from ours. They make great
            chocolate! Thus far, we've loved everything we've tried from them.
            But, they are not cheap.
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
        </div>
      </div>
    </main>
  );
};

export default Faqs;
