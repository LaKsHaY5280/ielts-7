import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 17 Academic Reading Test 4
 */
export const Cambridge17ARTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-6</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 1-6 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>TRUE</strong> if the statement agrees with the information
            </p>
            <p className="mb-1">
              <strong>FALSE</strong> if the statement contradicts the
              information
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>1.</strong> Many Madagascan forests are being destroyed
                by attacks from insects.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q1-true" />
                  <Label htmlFor="q1-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q1-false" />
                  <Label htmlFor="q1-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q1-ng" />
                  <Label htmlFor="q1-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>2.</strong> Loss of habitat has badly affected
                insectivorous bats in Madagascar.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q2-true" />
                  <Label htmlFor="q2-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q2-false" />
                  <Label htmlFor="q2-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q2-ng" />
                  <Label htmlFor="q2-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>3.</strong> Ricardo Rocha has carried out studies of
                bats in different parts of the world.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q3-true" />
                  <Label htmlFor="q3-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q3-false" />
                  <Label htmlFor="q3-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q3-ng" />
                  <Label htmlFor="q3-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>4.</strong> Habitat modification has resulted in
                indigenous bats in Madagascar becoming useful to farmers.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q4-true" />
                  <Label htmlFor="q4-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q4-false" />
                  <Label htmlFor="q4-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q4-ng" />
                  <Label htmlFor="q4-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>5.</strong> The Malagasy mouse-eared bat is more common
                than other indigenous bat species in Madagascar.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q5-true" />
                  <Label htmlFor="q5-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q5-false" />
                  <Label htmlFor="q5-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q5-ng" />
                  <Label htmlFor="q5-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>6.</strong> Bats may feed on paddy swarming caterpillars
                and grass webworms.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q6-true" />
                  <Label htmlFor="q6-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q6-false" />
                  <Label htmlFor="q6-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q6-ng" />
                  <Label htmlFor="q6-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 7-13</h3>
          <p className="mb-2">Complete the table below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 7-13 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              The study carried out by Rocha's team
            </h4>

            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-semibold w-1/4">Aim</td>
                  <td className="py-2">
                    – to investigate the feeding habits of bats in farmland near
                    the Ranomafana National Park
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Method</td>
                  <td className="py-2">
                    <p>
                      – ultrasonic recording to identify favourite feeding spots
                    </p>
                    <p>
                      – DNA analysis of bat <strong>7.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-semibold">Findings</td>
                  <td className="py-2">
                    <p>– the bats</p>
                    <p>– were most active in rice fields located on hills</p>
                    <p>
                      – ate pests of rice, <strong>8.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />,
                      sugarcane, nuts and fruit
                    </p>
                    <p>
                      – prevent the spread of disease by eating{" "}
                      <strong>9.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      and blackflies
                    </p>
                    <p>– local attitudes to bats are mixed:</p>
                    <p>
                      – they provide food rich in <strong>10.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      – the buildings where they roost become{" "}
                      <strong>11.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      – they play an important role in local{" "}
                      <strong>12.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Recommendation</td>
                  <td className="py-2">
                    <p>
                      – farmers should provide special <strong>13.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      to support the bat population
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-18</h3>
          <p className="mb-2">Reading Passage 2 has six paragraphs, A-F.</p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-F, in boxes 14-18 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14.</strong> an explanation of the need for research to
                focus on individuals with a fairly consistent
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q14-${letter}`} />
                    <Label htmlFor={`q14-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15.</strong> examples of the sources the database has
                been compiled from
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q15-${letter}`} />
                    <Label htmlFor={`q15-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16.</strong> an account of one individual's refusal to
                obey an order
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q16-${letter}`} />
                    <Label htmlFor={`q16-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17.</strong> a reference to a region being particularly
                suited to research into the link between education and economic
                growth
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q17-${letter}`} />
                    <Label htmlFor={`q17-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18.</strong> examples of the items included in a list of
                personal possessions
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q18-${letter}`} />
                    <Label htmlFor={`q18-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 19-22</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD</strong> from the passage for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 19-22 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              Demographic reconstruction of two German communities
            </h4>

            <p className="mb-4">
              The database that Ogilvie and her team has compiled sheds light on
              the lives of a range of individuals, as well as those of their{" "}
              <strong>19.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, over a
              300-year period. For example, Ana Regina and Magdalena
              Riethmüllerin were reprimanded for reading while they should have
              been paying attention to a <strong>20.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>

            <p className="mb-4">
              There was also Juliana Schweickherdt, who came to the notice of
              the weavers' guild in the year 1752 for breaking guild rules. As a
              punishment, she was later given a <strong>21.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. Cases
              like this illustrate how the guilds could prevent{" "}
              <strong>22.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and stop
              skilled people from working.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23 and 24</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 23 and 24 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> of the following statements does the
            writer make about literacy rates in Section B?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-a" />
              <Label htmlFor="q23-24-a" className="flex-1">
                A Very little research has been done into the link between high
                literacy rates and improved earnings.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-b" />
              <Label htmlFor="q23-24-b" className="flex-1">
                B Literacy rates in Germany between 1600 and 1900 were very
                good.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-c" />
              <Label htmlFor="q23-24-c" className="flex-1">
                C There is strong evidence that high literacy rates in the
                modern world result in economic growth.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-d" />
              <Label htmlFor="q23-24-d" className="flex-1">
                D England is a good example of how high literacy rates helped a
                country industrialise.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q23-24-e" />
              <Label htmlFor="q23-24-e" className="flex-1">
                E Economic growth can help to improve literacy rates.
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 25 and 26</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 25 and 26 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> of the following statements does the
            writer make in Section F about guilds in German-speaking Central
            Europe between 1600 and 1900?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-a" />
              <Label htmlFor="q25-26-a" className="flex-1">
                A They helped young people to learn a skill.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-b" />
              <Label htmlFor="q25-26-b" className="flex-1">
                B They were opposed to people moving to an area for work.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-c" />
              <Label htmlFor="q25-26-c" className="flex-1">
                C They kept better records than guilds in other parts of the
                world.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-d" />
              <Label htmlFor="q25-26-d" className="flex-1">
                D They opposed practices that threatened their control over a
                trade.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q25-26-e" />
              <Label htmlFor="q25-26-e" className="flex-1">
                E They predominantly consisted of wealthy merchants.
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-32</h3>
          <p className="mb-2">Reading Passage 3 has eight paragraphs, A-H.</p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-H, in boxes 27-32 on your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>27.</strong> a reference to earlier examples of
                blindfold chess
              </p>
              <RadioGroup className="flex flex-row space-x-4 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q27-${letter}`} />
                    <Label htmlFor={`q27-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28.</strong> an outline of what blindfold chess involves
              </p>
              <RadioGroup className="flex flex-row space-x-4 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q28-${letter}`} />
                    <Label htmlFor={`q28-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29.</strong> a claim that Gareyev's skill is limited to
                chess
              </p>
              <RadioGroup className="flex flex-row space-x-4 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q29-${letter}`} />
                    <Label htmlFor={`q29-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30.</strong> why Gareyev's skill is of interest to
                scientists
              </p>
              <RadioGroup className="flex flex-row space-x-4 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q30-${letter}`} />
                    <Label htmlFor={`q30-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31.</strong> an outline of Gareyev's priorities
              </p>
              <RadioGroup className="flex flex-row space-x-4 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q31-${letter}`} />
                    <Label htmlFor={`q31-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>32.</strong> a reason why the last part of a game may be
                difficult
              </p>
              <RadioGroup className="flex flex-row space-x-4 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-2">
                    <RadioGroupItem value={letter} id={`q32-${letter}`} />
                    <Label htmlFor={`q32-${letter}`}>{letter}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 33-36</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 33-36 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>TRUE</strong> if the statement agrees with the information
            </p>
            <p className="mb-1">
              <strong>FALSE</strong> if the statement contradicts the
              information
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>33.</strong> In the forthcoming games, all the
                participants will be blindfolded.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q33-true" />
                  <Label htmlFor="q33-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q33-false" />
                  <Label htmlFor="q33-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q33-ng" />
                  <Label htmlFor="q33-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34.</strong> Gareyev has won competitions in BASE
                jumping.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q34-true" />
                  <Label htmlFor="q34-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q34-false" />
                  <Label htmlFor="q34-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q34-ng" />
                  <Label htmlFor="q34-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35.</strong> UCLA is the first university to carry out
                research into blindfold chess players.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q35-true" />
                  <Label htmlFor="q35-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q35-false" />
                  <Label htmlFor="q35-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q35-ng" />
                  <Label htmlFor="q35-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>36.</strong> Good chess players are likely to be able to
                play blindfold chess.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q36-true" />
                  <Label htmlFor="q36-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q36-false" />
                  <Label htmlFor="q36-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q36-ng" />
                  <Label htmlFor="q36-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">Complete the summary below</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 37-40 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">How the research was carried out</h4>

            <p className="mb-4">
              The researchers started by testing Gareyev's <strong>37.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />; for
              example, he was required to recall a string of{" "}
              <strong>38.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in order
              and also in reverse order. Although his performance was normal,
              scans showed an unusual amount of <strong>39.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> within
              the areas of Gareyev's brain that are concerned with directing
              attention. In addition, the scans raised the possibility of
              unusual strength in the parts of his brain that deal with{" "}
              <strong>40.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> input.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
