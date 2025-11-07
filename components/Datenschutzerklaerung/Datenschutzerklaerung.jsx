'use client';

import InfoModal from '../InfoModal/InfoModal';

const Datenschutzerklaerung = ({ isOpen, onClose }) => {
  // Placeholder content - user will replace this
  const content = `
    <div class="my-8">
      <p class="mb-4">Allgemeine Hinweise</p>
      <p>Diese Datenschutzerklärung gilt für alle Sprachversionen der Website (Deutsch und Englisch).  
      <p>Die Verarbeitung personenbezogener Daten erfolgt unabhängig von der gewählten Sprache gemäß den in dieser Erklärung beschriebenen Grundsätzen.</p>
      <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Datenerfassung auf dieser Website</p>
      <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
      <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
    </div>
    <div class="my-8">
      <p class="mb-4">Wie erfassen wir Ihre Daten?</p>
      <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
    </div>
    <div class="my-8">
      <p class="mb-4">Wofür nutzen wir Ihre Daten?</p>
      <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
    </div>
    <div class="my-8">
      <p class="mb-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
      <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Um-ständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
    </div>
    <div class="my-8">
      <p class="mb-4">Analyse-Tools und Tools von Drittanbietern</p>
      <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Speicherdauer</p>
      <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
    </div>
    <div class="my-8">
      <p class="mb-4">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</p>
      <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutz-erklärung informiert.</p>
    </div>

    <hr />

    <div class="space-y-4 my-8">
      <p>Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sicheren Drittstaaten sowie die Weitergabe an US-Unternehmen</p>
      <p>Wir verwenden Google Analytics, einen Webanalysedienst der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland) mit Serverstandorten auch in den USA. Ihre personenbezogenen Daten können in die USA übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in datenschutzrechtlich unsicheren Drittstaaten kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Google verfügt jedoch über eine Zertifizierung unter dem „EU-US Data Privacy Framework“ (DPF), wodurch ein angemessenes Datenschutzniveau gewährleistet ist.</p>
      <p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie zur Gewährleistung der Funktionsfähigkeit und Analyse des Nutzerverhaltens auf dieser Website. Ihre Einwilligung kann jederzeit widerrufen werden. Weitere Informationen zur Datenverarbeitung durch Google Analytics finden Sie unter: https://policies.google.com/privacy.</p>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Empfänger von personenbezogenen Daten</p>
      <p>Im Rahmen unserer Website-Verwaltung und Portfolio-Analyse arbeiten wir mit externen Dienstleistern wie Google Analytics zusammen. Personenbezogene Daten werden nur an diese externen Stellen weitergegeben, soweit dies zur Bereitstellung der Dienste oder zur Analyse des Nutzerverhaltens erforderlich ist.</p>
      <p>Wir geben personenbezogene Daten nur dann weiter, wenn dies gesetzlich vorgeschrieben ist (z. B. an Steuerbehörden), auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung oder auf Basis einer sonstigen gesetzlichen Rechtsgrundlage. </p>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
      <p>Viele Datenverarbeitungsvorgänge auf dieser Website, wie z. B. Google Analytics, sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Recht auf Datenübertragbarkeit</p>
      <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung (z. B. Google Analytics) oder in Erfüllung einer Kontaktanfrage automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format ausgehändigt zu bekommen. Die direkte Übertragung an einen anderen Verantwortlichen erfolgt nur, soweit dies technisch möglich ist.</p>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Auskunft, Berichtigung und Löschung</p>
      <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Recht auf Einschränkung der Verarbeitung</p>
      <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
      <ul class="my-4 list-none list-inside">
        <li>- Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        <li>- Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
        <li>- Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        <li>- Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
      </ul>
      <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
    </div>

    <hr />

    <div class="space-y-4 my-8">
      <p>Hosting</p>
      <p>Diese Website wird über den Hosting-Anbieter Vercel, Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA betrieben. Personenbezogene Daten, die beim Besuch der Website anfallen, wie z. B. IP-Adressen und Websitezugriffe, werden auf den Servern von Vercel gespeichert. Die Speicherung erfolgt ausschließlich zur sicheren, schnellen und effizienten Bereitstellung der Website. Vercel verarbeitet Ihre Daten nur insoweit, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und folgt unseren Weisungen.</p>
      <p>Weitere Informationen zum Datenschutz bei Vercel finden Sie hier: <a href="https://vercel.com/legal/privacy-policy" target="_blank">https://vercel.com/legal/privacy-policy</a></p>
    </div>

    <hr />

    <div class="space-y-4 my-8">
      <p>Cookies</p>
      <p>Unsere Internetseiten verwenden sogenannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.</p>
      <p>Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).</p>
      <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.</p>
      <p>Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1TTDSG); die Einwilligung ist jederzeit widerrufbar.</p>
      <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein. Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.</p>
    </div>

    <hr />

    <div class="space-y-4 my-8">
      <p>Anfrage per E-Mail</p>
      <p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Inhalt Ihrer Nachricht) zum Zwecke der Bearbeitung Ihrer Anfrage gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt) oder Art. 6 Abs. 1 lit. f DSGVO (im Falle sonstiger Anfragen, zur effektiven Bearbeitung Ihres Anliegens).</p>
      <p>Die von Ihnen gesendeten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern oder der Zweck für die Speicherung entfällt. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>
    </div>

    <hr />

    <div class="space-y-4 my-8">
      <p>Social Media Präsenz</p>
      <p>Wir unterhalten Fanpages innerhalb verschiedener sozialer Netzwerke und Plattformen mit dem Ziel, mit den dort aktiven Kunden, Interessenten und Nutzern zu kommunizieren und sie dort über unsere Leistungen zu informieren.</p>
      <p>Wir weisen darauf hin, dass dabei Ihre personenbezogenen Daten außerhalb der Europäischen Union verarbeitet werden können, sodass sich hierbei Risiken für Sie ergeben können (etwa bei der Durchsetzung Ihrer Rechte nach europäischen / deutschen Recht).</p>
      <p>Die Daten der Nutzer werden im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Diese Nutzungsprofile können wiederum dazu verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).</p>
      <p>Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 S. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern um eine Einwilligung in die Datenverarbeitung gebeten werden (d.h. ihr Einverständnis z.B. über das Anhaken eines Kontrollkästchens oder Bestätigung einer Schaltfläche erklären) ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 S. 1 lit. a. DSGVO.</p>
    </div>

    <div class="space-y-4 my-8">
      <p>Social Media Plattformen</p>

      <div>
        <p>Instagram</p>
        <p>Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland</p>
        <p>Datenschutzerklärung/Opt-Out: <a href="https://instagram.com/about/legal/privacy/" target="_blank">https://instagram.com/about/legal/privacy/</a></p>
      </div>

      <div>
        <p>LinkedIn</p>
        <p>LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland</p>
        <p>Datenschutzerklärung: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">https://www.linkedin.com/legal/privacy-policy</a></p>
        <p>Opt-Out: <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank">https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out</a></p>
      </div>

      <div>
        <p>Behance</p>
        <p>Adobe Systems Software Ireland Limited, San José, California, United States</p>
        <p>Datenschutzerklärung: <a href="https://adobe.com/privacy.html" target="_blank">https://adobe.com/privacy.html</a></p>
        <p>Opt-Out: <a href="https://www.adobe.com/privacy/opt-out.html" target="_blank">https://www.adobe.com/privacy/opt-out.html</a></p>
      </div>
    </div>

    <hr />

    <div class="my-8">
      <p class="mb-4">Verwendete Schriftarten</p>
      <p>Alle auf dieser Website verwendeten Schriftarten werden lokal eingebunden, sodass keine Daten der Nutzer an externe Anbieter übermittelt werden.</p>
    </div>
  `;

  return (
    <InfoModal
      isOpen={isOpen}
      onClose={onClose}
      title="Datenschutzerklärung"
      content={content}
    />
  );
};

export default Datenschutzerklaerung;

