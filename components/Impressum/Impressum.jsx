'use client';

import InfoModal from '../InfoModal/InfoModal';

const Impressum = ({ isOpen, onClose }) => {
  // Placeholder content - user will replace this
  const content = `
  <div class="mb-10 flex flex-col">
    <p class="mb-4">Angaben gemäß § 5 TMG:</p>
    <address class="not-italic flex flex-col mb-4">
      Ivan Inozemtsev
      <br />
      Am Ludwigsbau 8
      <br />
      85942 Unna, Deutschland
      <br />
      <br />
      <a href="mailto:inozemtsevco@gmail.com">Email:inozemtsevco@gmail.com</a>
      <a href="tel:+4916096237301">Telefon: 49-16096237301</a>
      </address>

      <p class="mb-4">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: <br/> Keine USt-IdNr.</p>
      <p class="mb-4">Beruf: Freiberuflicher Grafikdesigner / UX/UI Designer</p>
      <p class="mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Ivan Inozemtsev</p>
      <p class="mb-4">Hinweis: Diese Webseite dient als Portfolio meiner freiberuflichen Tätigkeit.</p>
      <p>Dieses Impressum gilt auch für Auftritte in den sozialen Netzwerken</p>
      <a href="https://www.instagram.com/inozemtsevco" target="_blank">https://www.instagram.com/inozemtsevco</a>
      <a href="https://www.linkedin.com/in/inozemtsevco/" target="_blank">https://www.linkedin.com/in/inozemtsevco/</a>
      <a href="https://www.behance.net/ivaninozemcev" target="_blank">https://www.behance.net/ivaninozemcev</a>
    </div>

    <hr />

    <div class="space-y-4 my-8">
      <p>Haftung für Links</p>
      <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    </div>
    <div class="space-y-4 my-8">
      <p>Haftung für Inhalte</p>
      <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
    </div>
    <div class="space-y-4 my-8">
      <p>Urheberrecht</p>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
    </div>
    `;

  return (
    <InfoModal
      isOpen={isOpen}
      onClose={onClose}
      title="Impressum"
      content={content}
    />
  );
};

export default Impressum;

