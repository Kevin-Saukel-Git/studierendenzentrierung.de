import { Title, Text, Stack, Paper, Box, Container, Divider } from "@mantine/core";
import { SEO } from "../components/SEO";

export default function PrivacyPolicyPage() {
	return (
		<>
			<SEO
				title="Datenschutzerklärung"
				description="Datenschutzerklärung der Plattform Studierendenzentrierung. Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten."
				canonical="/privacy-policy"
			/>
			<div style={{ width: "100%", minHeight: "100vh", margin: 0, padding: 0 }}>
				{/* Hero Section */}
				<Box
					style={{
						background: "linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
						padding: "4rem 2rem 3rem 2rem",
						width: "100%",
					}}
				>
					<Container size="lg">
						<Title
							order={1}
							size="3rem"
							fw={800}
							style={{
								color: "#1e3a8a",
								lineHeight: 1.2,
							}}
						>
							Datenschutzerklärung
						</Title>
					</Container>
				</Box>

				{/* Main Content */}
				<Container
					size="lg"
					py="3rem"
					px="2rem"
				>
					<Stack gap="xl">
						{/* Section 1 */}
						<Paper
							p="xl"
							withBorder
							radius="md"
							style={{
								background: "linear-gradient(135deg, rgba(96, 165, 250, 0.02) 0%, rgba(249, 115, 22, 0.02) 100%)",
								borderColor: "rgba(96, 165, 250, 0.2)",
							}}
						>
							<Stack gap="lg">
								<Box>
									<Title
										order={2}
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										1. Datenschutz auf einen Blick
									</Title>
								</Box>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
								>
									Allgemeine Hinweise
								</Title>
								<Text mb="md">
									Die folgenden Hinweise geben einen einfachen
									Überblick darüber, was mit Ihren
									personenbezogenen Daten passiert, wenn Sie diese
									Website besuchen. Personenbezogene Daten sind
									alle Daten, mit denen Sie persönlich
									identifiziert werden können. Ausführliche
									Informationen zum Thema Datenschutz entnehmen
									Sie unserer unter diesem Text aufgeführten
									Datenschutzerklärung.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
								>
									Datenerfassung auf dieser Website
								</Title>

								<Title
									order={4}
									size="h5"
									mb="xs"
									mt="md"
									style={{
										color: "#1e3a8a",
										fontWeight: 500,
									}}
								>
									Wer ist verantwortlich für die Datenerfassung
									auf dieser Website?
								</Title>
								<Text mb="md">
									Die Datenverarbeitung auf dieser Website erfolgt
									durch den Websitebetreiber. Dessen Kontaktdaten
									können Sie dem Abschnitt „Verantwortliche
									Stelle" in dieser Datenschutzerklärung
									entnehmen.
								</Text>

								<Title
									order={4}
									size="h5"
									mb="xs"
									mt="md"
									style={{
										color: "#1e3a8a",
										fontWeight: 500,
									}}
								>
									Wie erfassen wir Ihre Daten?
								</Title>
								<Text mb="md">
									Ihre Daten werden zum einen dadurch erhoben,
									dass Sie uns diese mitteilen. Hierbei kann es
									sich z. B. um Daten handeln, die Sie in ein
									Kontaktformular auf Studierendenzentrierung.de
									eingeben.
								</Text>
								<Text mb="md">
									Andere Daten werden automatisch oder nach Ihrer
									Einwilligung beim Besuch der Website durch
									unsere IT-Systeme erfasst. Das sind vor allem
									technische Daten (z. B. Internetbrowser,
									Betriebssystem oder Uhrzeit des Seitenaufrufs).
									Die Erfassung dieser Daten erfolgt automatisch,
									sobald Sie diese Website betreten.
								</Text>

								<Title
									order={4}
									size="h5"
									mb="xs"
									mt="md"
									style={{
										color: "#1e3a8a",
										fontWeight: 500,
									}}
								>
									Wofür nutzen wir Ihre Daten?
								</Title>
								<Text mb="md">
									Ein Teil der Daten wird erhoben, um eine
									fehlerfreie Bereitstellung der Website zu
									gewährleisten. Andere Daten können zur Analyse
									Ihres Nutzerverhaltens verwendet werden.
								</Text>

								<Title
									order={4}
									size="h5"
									mb="xs"
									mt="md"
									style={{
										color: "#1e3a8a",
										fontWeight: 500,
									}}
								>
									Welche Rechte haben Sie bezüglich Ihrer Daten?
								</Title>
								<Text mb="md">
									Sie haben jederzeit das Recht, unentgeltlich
									Auskunft über Herkunft, Empfänger und Zweck
									Ihrer gespeicherten personenbezogenen Daten zu
									erhalten. Sie haben außerdem ein Recht, die
									Berichtigung oder Löschung dieser Daten zu
									verlangen. Wenn Sie eine Einwilligung zur
									Datenverarbeitung erteilt haben, können Sie
									diese Einwilligung jederzeit für die Zukunft
									widerrufen. Außerdem haben Sie das Recht, unter
									bestimmten Umständen die Einschränkung der
									Verarbeitung Ihrer personenbezogenen Daten zu
									verlangen. Des Weiteren steht Ihnen ein
									Beschwerderecht bei der zuständigen
									Aufsichtsbehörde zu.
								</Text>
								<Text mb="md">
									Hierzu sowie zu weiteren Fragen zum Thema
									Datenschutz können Sie sich jederzeit an uns
									wenden.
								</Text>

								<Title
									order={4}
									size="h5"
									mb="xs"
									mt="md"
									style={{
										color: "#1e3a8a",
										fontWeight: 500,
									}}
								>
									Analyse-Tools und Tools von Drittanbietern
								</Title>
								<Text mb="md">
									Beim Besuch dieser Website kann Ihr
									Surf-Verhalten statistisch ausgewertet werden.
									Das geschieht vor allem mit sogenannten
									Analyseprogrammen.
								</Text>
								<Text mb="md">
									Detaillierte Informationen zu diesen
									Analyseprogrammen finden Sie in der folgenden
									Datenschutzerklärung.
								</Text>
							</Stack>
						</Paper>

						{/* Section 2 */}
						<Paper
							p="xl"
							withBorder
							radius="md"
							style={{
								background: "linear-gradient(135deg, rgba(96, 165, 250, 0.02) 0%, rgba(249, 115, 22, 0.02) 100%)",
								borderColor: "rgba(96, 165, 250, 0.2)",
							}}
						>
							<Stack gap="lg">
								<Box>
									<Title
										order={2}
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										2. Hosting
									</Title>
								</Box>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Externes Hosting
								</Title>
								<Text mb="md">
									Diese Website wird bei einem externen
									Dienstleister gehostet (Hoster). Die
									personenbezogenen Daten, die auf dieser Website
									erfasst werden, werden auf den Servern des
									Hosters gespeichert. Hierbei kann es sich v. a.
									um IP-Adressen, Kontaktanfragen, Meta- und
									Kommunikationsdaten, Vertragsdaten,
									Kontaktdaten, Namen, Websitezugriffe und
									sonstige Daten, die über eine Website generiert
									werden, handeln.
								</Text>
								<Text mb="md">
									Der Einsatz des Hosters erfolgt zum Zwecke der
									Vertragserfüllung gegenüber unseren potenziellen
									und bestehenden Kunden (Art. 6 Abs. 1 lit. b
									DSGVO) und im Interesse einer sicheren,
									schnellen und effizienten Bereitstellung unseres
									Online-Angebots durch einen professionellen
									Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern
									eine entsprechende Einwilligung abgefragt wurde,
									erfolgt die Verarbeitung ausschließlich auf
									Grundlage von Art. 6 Abs. 1 lit. a DSGVO und §
									25 Abs. 1 TTDSG, soweit die Einwilligung die
									Speicherung von Cookies oder den Zugriff auf
									Informationen im Endgerät des Nutzers (z. B.
									Device-Fingerprinting) im Sinne des TTDSG
									umfasst. Die Einwilligung ist jederzeit
									widerrufbar.
								</Text>
								<Text mb="md">
									Unser Hoster wird Ihre Daten nur insoweit
									verarbeiten, wie dies zur Erfüllung seiner
									Leistungspflichten erforderlich ist und unsere
									Weisungen in Bezug auf diese Daten befolgen.
								</Text>
								<Text mb="md">Wir setzen folgenden Hoster ein:</Text>
								<Box
									style={{
										padding: "1rem",
										backgroundColor:
											"rgba(30, 58, 138, 0.03)",
										borderRadius: "8px",
										border: "1px solid rgba(30, 58, 138, 0.1)",
										marginBottom: "1rem",
									}}
								>
									<Text mb="xs">
										Contabo GmbH
										<br />
										Aschauer Straße 32a
										<br />
										81549 München
									</Text>
								</Box>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Auftragsverarbeitung
								</Title>
								<Text mb="md">
									Wir haben einen Vertrag über
									Auftragsverarbeitung (AVV) mit dem oben
									genannten Anbieter geschlossen. Hierbei handelt
									es sich um einen datenschutzrechtlich
									vorgeschriebenen Vertrag, der gewährleistet,
									dass dieser die personenbezogenen Daten unserer
									Websitebesucher nur nach unseren Weisungen und
									unter Einhaltung der DSGVO verarbeitet.
								</Text>
							</Stack>
						</Paper>

						{/* Section 3 */}
						<Paper
							p="xl"
							withBorder
							radius="md"
							style={{
								background: "linear-gradient(135deg, rgba(96, 165, 250, 0.02) 0%, rgba(249, 115, 22, 0.02) 100%)",
								borderColor: "rgba(96, 165, 250, 0.2)",
							}}
						>
							<Stack gap="lg">
								<Box>
									<Title
										order={2}
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										3. Allgemeine Hinweise und
										Pflichtinformationen
									</Title>
								</Box>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Datenschutz
								</Title>
								<Text mb="md">
									Die Betreiber dieser Seiten nehmen den Schutz
									Ihrer persönlichen Daten sehr ernst. Wir
									behandeln Ihre personenbezogenen Daten
									vertraulich und entsprechend den gesetzlichen
									Datenschutzvorschriften sowie dieser
									Datenschutzerklärung.
								</Text>
								<Text mb="md">
									Wenn Sie diese Website benutzen, werden
									verschiedene personenbezogene Daten erhoben.
									Personenbezogene Daten sind Daten, mit denen Sie
									persönlich identifiziert werden können. Die
									vorliegende Datenschutzerklärung erläutert,
									welche Daten wir erheben und wofür wir sie
									nutzen. Sie erläutert auch, wie und zu welchem
									Zweck das geschieht.
								</Text>
								<Text mb="md">
									Wir weisen darauf hin, dass die Datenübertragung
									im Internet (z. B. bei der Kommunikation per
									E-Mail) Sicherheitslücken aufweisen kann. Ein
									lückenloser Schutz der Daten vor dem Zugriff
									durch Dritte ist nicht möglich.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Verantwortliche Stelle
								</Title>
								<Text mb="md">
									Die verantwortliche Stelle für die
									Datenverarbeitung auf dieser Website ist:
								</Text>
								<Box
									style={{
										padding: "1rem",
										backgroundColor:
											"rgba(30, 58, 138, 0.03)",
										borderRadius: "8px",
										border: "1px solid rgba(30, 58, 138, 0.1)",
										marginBottom: "1rem",
									}}
								>
									<Text mb="xs">
										Kevin Saukel
										<br />
										Langobardenweg 16
										<br />
										65929 Frankfurt am Main
										<br />
										<br />
										Telefon: +49 179 / 412 98 07
										<br />
										E-Mail: datenschutz@saukels.de
									</Text>
								</Box>
								<Text mb="md">
									Verantwortliche Stelle ist die natürliche oder
									juristische Person, die allein oder gemeinsam
									mit anderen über die Zwecke und Mittel der
									Verarbeitung von personenbezogenen Daten (z. B.
									Namen, E-Mail-Adressen o. Ä.) entscheidet.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Speicherdauer
								</Title>
								<Text mb="md">
									Soweit innerhalb dieser Datenschutzerklärung
									keine speziellere Speicherdauer genannt wurde,
									verbleiben Ihre personenbezogenen Daten bei uns,
									bis der Zweck für die Datenverarbeitung
									entfällt. Wenn Sie ein berechtigtes
									Löschersuchen geltend machen oder eine
									Einwilligung zur Datenverarbeitung widerrufen,
									werden Ihre Daten gelöscht, sofern wir keine
									anderen rechtlich zulässigen Gründe für die
									Speicherung Ihrer personenbezogenen Daten haben
									(z. B. steuer- oder handelsrechtliche
									Aufbewahrungsfristen); im letztgenannten Fall
									erfolgt die Löschung nach Fortfall dieser
									Gründe.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Allgemeine Hinweise zu den Rechtsgrundlagen der
									Datenverarbeitung auf dieser Website
								</Title>
								<Text mb="md">
									Sofern Sie in die Datenverarbeitung eingewilligt
									haben, verarbeiten wir Ihre personenbezogenen
									Daten auf Grundlage von Art. 6 Abs. 1 lit. a
									DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern
									besondere Datenkategorien nach Art. 9 Abs. 1
									DSGVO verarbeitet werden. Im Falle einer
									ausdrücklichen Einwilligung in die Übertragung
									personenbezogener Daten in Drittstaaten erfolgt
									die Datenverarbeitung außerdem auf Grundlage von
									Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
									Speicherung von Cookies oder in den Zugriff auf
									Informationen in Ihr Endgerät (z. B. via
									Device-Fingerprinting) eingewilligt haben,
									erfolgt die Datenverarbeitung zusätzlich auf
									Grundlage von § 25 Abs. 1 TTDSG. Die
									Einwilligung ist jederzeit widerrufbar. Sind
									Ihre Daten zur Vertragserfüllung oder zur
									Durchführung vorvertraglicher Maßnahmen
									erforderlich, verarbeiten wir Ihre Daten auf
									Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
									Weiteren verarbeiten wir Ihre Daten, sofern
									diese zur Erfüllung einer rechtlichen
									Verpflichtung erforderlich sind auf Grundlage
									von Art. 6 Abs. 1 lit. c DSGVO. Die
									Datenverarbeitung kann ferner auf Grundlage
									unseres berechtigten Interesses nach Art. 6 Abs.
									1 lit. f DSGVO erfolgen. Über die jeweils im
									Einzelfall einschlägigen Rechtsgrundlagen wird
									in den folgenden Absätzen dieser
									Datenschutzerklärung informiert.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Widerruf Ihrer Einwilligung zur
									Datenverarbeitung
								</Title>
								<Text mb="md">
									Viele Datenverarbeitungsvorgänge sind nur mit
									Ihrer ausdrücklichen Einwilligung möglich. Sie
									können eine bereits erteilte Einwilligung
									jederzeit widerrufen. Die Rechtmäßigkeit der bis
									zum Widerruf erfolgten Datenverarbeitung bleibt
									vom Widerruf unberührt.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Widerspruchsrecht gegen die Datenerhebung in
									besonderen Fällen sowie gegen Direktwerbung
									(Art. 21 DSGVO)
								</Title>
								<Text mb="md">
									Wenn die Datenverarbeitung auf Grundlage von
									Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben
									Sie jederzeit das Recht, aus Gründen, die sich
									aus Ihrer besonderen Situation ergeben, gegen
									die Verarbeitung Ihrer personenbezogenen Daten
									Widerspruch einzulegen; dies gilt auch für ein
									auf diese Bestimmungen gestütztes Profiling. Die
									jeweilige Rechtsgrundlage, auf denen eine
									Verarbeitung beruht, entnehmen Sie dieser
									Datenschutzerklärung. Wenn Sie Widerspruch
									einlegen, werden wir Ihre betroffenen
									personenbezogenen Daten nicht mehr verarbeiten,
									es sei denn, wir können zwingende schutzwürdige
									Gründe für die Verarbeitung nachweisen, die Ihre
									Interessen, Rechte und Freiheiten überwiegen
									oder die Verarbeitung dient der Geltendmachung,
									Ausübung oder Verteidigung von Rechtsansprüchen
									(Widerspruch nach Art. 21 Abs. 1 DSGVO).
								</Text>
								<Text mb="md">
									Werden Ihre personenbezogenen Daten verarbeitet,
									um Direktwerbung zu betreiben, so haben Sie das
									Recht, jederzeit Widerspruch gegen die
									Verarbeitung Sie betreffender personenbezogener
									Daten zum Zwecke derartiger Werbung einzulegen;
									dies gilt auch für das Profiling, soweit es mit
									solcher Direktwerbung in Verbindung steht. Wenn
									Sie widersprechen, werden Ihre personenbezogenen
									Daten anschließend nicht mehr zum Zwecke der
									Direktwerbung verwendet (Widerspruch nach Art.
									21 Abs. 2 DSGVO).
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Beschwerderecht bei der zuständigen
									Aufsichtsbehörde
								</Title>
								<Text mb="md">
									Im Falle von Verstößen gegen die DSGVO steht den
									Betroffenen ein Beschwerderecht bei einer
									Aufsichtsbehörde, insbesondere in dem
									Mitgliedstaat ihres gewöhnlichen Aufenthalts,
									ihres Arbeitsplatzes oder des Orts des
									mutmaßlichen Verstoßes zu. Das Beschwerderecht
									besteht unbeschadet anderweitiger
									verwaltungsrechtlicher oder gerichtlicher
									Rechtsbehelfe.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Recht auf Datenübertragbarkeit
								</Title>
								<Text mb="md">
									Sie haben das Recht, Daten, die wir auf
									Grundlage Ihrer Einwilligung oder in Erfüllung
									eines Vertrags automatisiert verarbeiten, an
									sich oder an einen Dritten in einem gängigen,
									maschinenlesbaren Format aushändigen zu lassen.
									Sofern Sie die direkte Übertragung der Daten an
									einen anderen Verantwortlichen verlangen,
									erfolgt dies nur, soweit es technisch machbar
									ist.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Auskunft, Löschung und Berichtigung
								</Title>
								<Text mb="md">
									Sie haben im Rahmen der geltenden gesetzlichen
									Bestimmungen jederzeit das Recht auf
									unentgeltliche Auskunft über Ihre gespeicherten
									personenbezogenen Daten, deren Herkunft und
									Empfänger und den Zweck der Datenverarbeitung
									und ggf. ein Recht auf Berichtigung oder
									Löschung dieser Daten. Hierzu sowie zu weiteren
									Fragen zum Thema personenbezogene Daten können
									Sie sich jederzeit an uns wenden.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Recht auf Einschränkung der Verarbeitung
								</Title>
								<Text mb="md">
									Sie haben das Recht, die Einschränkung der
									Verarbeitung Ihrer personenbezogenen Daten zu
									verlangen. Hierzu können Sie sich jederzeit an
									uns wenden. Das Recht auf Einschränkung der
									Verarbeitung besteht in folgenden Fällen:
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Wenn Sie die Richtigkeit Ihrer bei uns
									gespeicherten personenbezogenen Daten
									bestreiten, benötigen wir in der Regel Zeit, um
									dies zu überprüfen. Für die Dauer der Prüfung
									haben Sie das Recht, die Einschränkung der
									Verarbeitung Ihrer personenbezogenen Daten zu
									verlangen.
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Wenn die Verarbeitung Ihrer personenbezogenen
									Daten unrechtmäßig geschah/geschieht, können Sie
									statt der Löschung die Einschränkung der
									Datenverarbeitung verlangen.
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Wenn wir Ihre personenbezogenen Daten nicht
									mehr benötigen, Sie sie jedoch zur Ausübung,
									Verteidigung oder Geltendmachung von
									Rechtsansprüchen benötigen, haben Sie das Recht,
									statt der Löschung die Einschränkung der
									Verarbeitung Ihrer personenbezogenen Daten zu
									verlangen.
								</Text>
								<Text
									mb="md"
									style={{ paddingLeft: "1rem" }}
								>
									• Wenn Sie einen Widerspruch nach Art. 21 Abs. 1
									DSGVO eingelegt haben, muss eine Abwägung
									zwischen Ihren und unseren Interessen
									vorgenommen werden. Solange noch nicht
									feststeht, wessen Interessen überwiegen, haben
									Sie das Recht, die Einschränkung der
									Verarbeitung Ihrer personenbezogenen Daten zu
									verlangen.
								</Text>
								<Text mb="md">
									Wenn Sie die Verarbeitung Ihrer
									personenbezogenen Daten eingeschränkt haben,
									dürfen diese Daten – von ihrer Speicherung
									abgesehen – nur mit Ihrer Einwilligung oder zur
									Geltendmachung, Ausübung oder Verteidigung von
									Rechtsansprüchen oder zum Schutz der Rechte
									einer anderen natürlichen oder juristischen
									Person oder aus Gründen eines wichtigen
									öffentlichen Interesses der Europäischen Union
									oder eines Mitgliedstaats verarbeitet werden.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									SSL- bzw. TLS-Verschlüsselung
								</Title>
								<Text mb="md">
									Diese Seite nutzt aus Sicherheitsgründen und zum
									Schutz der Übertragung vertraulicher Inhalte,
									wie zum Beispiel Bestellungen oder Anfragen, die
									Sie an uns als Seitenbetreiber senden, eine SSL-
									bzw. TLS-Verschlüsselung. Eine verschlüsselte
									Verbindung erkennen Sie daran, dass die
									Adresszeile des Browsers von „http://" auf
									„https://" wechselt und an dem Schloss-Symbol in
									Ihrer Browserzeile.
								</Text>
								<Text mb="md">
									Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert
									ist, können die Daten, die Sie an uns
									übermitteln, nicht von Dritten mitgelesen
									werden.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Widerspruch gegen Werbe-E-Mails
								</Title>
								<Text mb="md">
									Der Nutzung von im Rahmen der Impressumspflicht
									veröffentlichten Kontaktdaten zur Übersendung
									von nicht ausdrücklich angeforderter Werbung und
									Informationsmaterialien wird hiermit
									widersprochen. Die Betreiber der Seiten behalten
									sich ausdrücklich rechtliche Schritte im Falle
									der unverlangten Zusendung von
									Werbeinformationen, etwa durch Spam-E-Mails,
									vor.
								</Text>
							</Stack>
						</Paper>

						{/* Section 4 */}
						<Paper
							p="xl"
							withBorder
							radius="md"
							style={{
								background: "linear-gradient(135deg, rgba(96, 165, 250, 0.02) 0%, rgba(249, 115, 22, 0.02) 100%)",
								borderColor: "rgba(96, 165, 250, 0.2)",
							}}
						>
							<Stack gap="lg">
								<Box>
									<Title
										order={2}
										size="1.75rem"
										fw={700}
										style={{
											color: "#1e3a8a",
											marginBottom: "0.5rem",
										}}
									>
										4. Datenerfassung auf dieser Website
									</Title>
								</Box>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Was wir sammeln und speichern
								</Title>
								<Text mb="md">
									Während Sie unsere Website besuchen, zeichnen
									wir auf:
								</Text>
								<Text
									mb="md"
									style={{ paddingLeft: "1rem" }}
								>
									Standort, IP-Adresse und Browser-Typ
								</Text>
								<Text mb="md">
									Wir speichern Informationen über Sie
									üblicherweise so lange, wie wir Sie für den
									Zweck der Erfassung und Nutzung benötigen und
									verpflichtet sind, sie zu speichern.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Anfrage per E-Mail, Telefon oder Telefax
								</Title>
								<Text mb="md">
									Wenn Sie uns per E-Mail, Telefon oder Telefax
									kontaktieren, wird Ihre Anfrage inklusive aller
									daraus hervorgehenden personenbezogenen Daten
									(Name, Anfrage) zum Zwecke der Bearbeitung Ihres
									Anliegens bei uns gespeichert und verarbeitet.
									Diese Daten geben wir nicht ohne Ihre
									Einwilligung weiter.
								</Text>

								<Title
									order={4}
									size="h5"
									mb="xs"
									mt="md"
									style={{
										color: "#1e3a8a",
										fontWeight: 500,
									}}
								>
									Tool-Einreichungsformular
								</Title>
								<Text mb="md">
									Wenn Sie das Tool-Einreichungsformular auf
									Studierendenzentrierung.de nutzen, erheben und
									verarbeiten wir folgende personenbezogene Daten:
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Ihr Name
								</Text>
								<Text
									mb="md"
									style={{ paddingLeft: "1rem" }}
								>
									• Ihre E-Mail-Adresse
								</Text>
								<Text mb="md">
									Diese personenbezogenen Daten werden zum Zwecke
									der Bearbeitung Ihrer Tool-Einreichung und zur
									Kommunikation mit Ihnen verwendet. Diese Daten
									geben wir nicht ohne Ihre Einwilligung weiter.
								</Text>

								<Text mb="md">
									Die Verarbeitung dieser Daten erfolgt auf
									Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
									Ihre Anfrage mit der Erfüllung eines Vertrags
									zusammenhängt oder zur Durchführung
									vorvertraglicher Maßnahmen erforderlich ist. In
									allen übrigen Fällen beruht die Verarbeitung auf
									unserem berechtigten Interesse an der effektiven
									Bearbeitung der an uns gerichteten Anfragen
									(Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
									Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
									diese abgefragt wurde; die Einwilligung ist
									jederzeit widerrufbar.
								</Text>
								<Text mb="md">
									Die von Ihnen an uns per Kontaktanfragen oder
									über das Tool-Einreichungsformular übersandten
									Daten verbleiben bei uns, bis Sie uns zur
									Löschung auffordern, Ihre Einwilligung zur
									Speicherung widerrufen oder der Zweck für die
									Datenspeicherung entfällt (z. B. nach
									abgeschlossener Bearbeitung Ihres Anliegens).
									Zwingende gesetzliche Bestimmungen –
									insbesondere gesetzliche Aufbewahrungsfristen –
									bleiben unberührt.
								</Text>

								<Title
									order={3}
									size="h4"
									mb="sm"
									mt="lg"
									style={{
										color: "#1e3a8a",
										fontWeight: 600,
									}}
								>
									Server-Log-Dateien
								</Title>
								<Text mb="md">
									Der Provider der Seiten erhebt und speichert
									automatisch Informationen in so genannten
									Server-Log-Dateien, die Ihr Browser automatisch
									an uns übermittelt. Dies sind:
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Browsertyp und Browserversion
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• verwendetes Betriebssystem
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Referrer URL
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Hostname des zugreifenden Rechners
								</Text>
								<Text
									mb="xs"
									style={{ paddingLeft: "1rem" }}
								>
									• Uhrzeit der Serveranfrage
								</Text>
								<Text
									mb="md"
									style={{ paddingLeft: "1rem" }}
								>
									• IP-Adresse
								</Text>
								<Text mb="md">
									Eine Zusammenführung dieser Daten mit anderen
									Datenquellen wird nicht vorgenommen.
								</Text>
								<Text mb="md">
									Die Erfassung dieser Daten erfolgt auf Grundlage
									von Art. 6 Abs. 1 lit. f DSGVO. Der
									Websitebetreiber hat ein berechtigtes Interesse
									an der technisch fehlerfreien Darstellung und
									der Optimierung seiner Website – hierzu müssen
									die Server-Log-Files erfasst werden.
								</Text>
							</Stack>
						</Paper>
					</Stack>
				</Container>
			</div>
		</>
	);
}
