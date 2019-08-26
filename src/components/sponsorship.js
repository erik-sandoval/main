function Sponsorship() {
  function handleClick(e) {
    e.preventDefault();
    console.log("One-time");
  }
  function hanldeRecurring(e) {
    e.preventDefault();
    console.log("Recurring Sponsorship");
  }
  return (
    <div id="sponsorship" className="grid-container">
      {/* left side */}
      <div id="sponsorship-description" className="column-24">
        {/* sponsor-title */}
        <p id="sponsor-title">Interested in becoming a Sponsor?</p>
        <p>
          To get started, (link goes here) to see the sponsorship packages we
          have available. Once you"re ready, you can securely process payments
          using the buttons on your right.
        </p>
      </div>
      {/* Buttons below
      <div className="column-10 phone-column-6 tablet-column-12">
        <button onClick={handleClick} id="one-time">
          One-time Sponsor
        </button>
        <button onClick={hanldeRecurring} id="recurring" className="trailer-1">
          Recurring Sponsorship
        </button>
      </div> */}
    </div>
  );
}

export default Sponsorship;
