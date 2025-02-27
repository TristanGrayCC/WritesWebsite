import HeaderMenu from "../Menu/HeaderMenu";

function OtherWritingPage() {
  return (
    <div className="App">
      <HeaderMenu />
      <div className="language-page">
        <h1>Other Writing</h1>
        <div className="piece">
          <h2>Midnight Poem</h2>
          <p>The man desperately hides his own bare form.</p>
          <p>He hides and he cloaks and he buries.</p>
          <p>His hands awash with apology and doubt.</p>
        </div>
        <div className="piece">
          <h2>The Candle</h2>
          <p>
            “Will you spare me?” he said, holding the wax within his hands.
            “When you spread your light and swallow up the world?”
          </p>
          <p>
            The candle spoke, and with its word it summoned the strength to leap
            free and to the cloth that burned so bright.
          </p>
          <p>“No.”</p>
        </div>
        <div className="piece">
          <h2>The Falling Embers</h2>
          <p>An ongoing work of my first full novel. </p>
          <p>
            In the wake of a long war, a peace forged by the rule of powerful
            religious leaders rests on dry tinder. A rot has set root in the
            orders, one that seeks to seize the power of a long-dead race,
            whatever the cost.
          </p>
          <p>
            Thrown into the storm of a furious past clashing brought to the
            present two young natives of the capital are forced to flee into the
            wilds. What they'll find will reveal the real depths of the
            ambitions of those willing to tear down an Empire, and the
            existential stakes facing them all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OtherWritingPage;
