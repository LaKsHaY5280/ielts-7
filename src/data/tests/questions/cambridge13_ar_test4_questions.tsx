// Cambridge 13 Academic Reading Test 4 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 13 Academic Reading Test 4
 */
export const Cambridge13ARTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-8</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 1-8 on your answer sheet, write</p>
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

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1.</strong> Clippers were originally intended to be used
                as passenger ships.
              </p>
              <RadioGroup name="question1" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q1-true" value="TRUE" />
                  <Label htmlFor="q1-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-false" value="FALSE" />
                  <Label htmlFor="q1-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-ng" value="NOT GIVEN" />
                  <Label htmlFor="q1-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2.</strong> <em>Cutty Sark</em> was given the name of a
                character in a poem.
              </p>
              <RadioGroup name="question2" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q2-true" value="TRUE" />
                  <Label htmlFor="q2-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-false" value="FALSE" />
                  <Label htmlFor="q2-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-ng" value="NOT GIVEN" />
                  <Label htmlFor="q2-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3.</strong> The contract between John Willis and Scott &
                Linton favoured Willis.
              </p>
              <RadioGroup name="question3" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q3-true" value="TRUE" />
                  <Label htmlFor="q3-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-false" value="FALSE" />
                  <Label htmlFor="q3-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-ng" value="NOT GIVEN" />
                  <Label htmlFor="q3-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>4.</strong> John Willis wanted <em>Cutty Sark</em> to be
                the fastest tea clipper travelling between the UK and China.
              </p>
              <RadioGroup name="question4" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q4-true" value="TRUE" />
                  <Label htmlFor="q4-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-false" value="FALSE" />
                  <Label htmlFor="q4-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-ng" value="NOT GIVEN" />
                  <Label htmlFor="q4-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>5.</strong> Despite storm damage, <em>Cutty Sark</em>{" "}
                beat <em>Thermopylae</em> back to London.
              </p>
              <RadioGroup name="question5" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q5-true" value="TRUE" />
                  <Label htmlFor="q5-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-false" value="FALSE" />
                  <Label htmlFor="q5-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-ng" value="NOT GIVEN" />
                  <Label htmlFor="q5-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>6.</strong> The opening of the Suez Canal meant that
                steam ships could travel between Britain and China faster than
                clippers.
              </p>
              <RadioGroup name="question6" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q6-true" value="TRUE" />
                  <Label htmlFor="q6-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-false" value="FALSE" />
                  <Label htmlFor="q6-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-ng" value="NOT GIVEN" />
                  <Label htmlFor="q6-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>7.</strong> Steam ships sometimes used the ocean route
                to travel between London and China.
              </p>
              <RadioGroup name="question7" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q7-true" value="TRUE" />
                  <Label htmlFor="q7-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-false" value="FALSE" />
                  <Label htmlFor="q7-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-ng" value="NOT GIVEN" />
                  <Label htmlFor="q7-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>8.</strong> Captain Woodget put <em>Cutty Sark</em> at
                risk of hitting an iceberg.
              </p>
              <RadioGroup name="question8" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q8-true" value="TRUE" />
                  <Label htmlFor="q8-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-false" value="FALSE" />
                  <Label htmlFor="q8-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-ng" value="NOT GIVEN" />
                  <Label htmlFor="q8-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 9-13 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>9.</strong> After 1880, Cutty Sark carried{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> as its
                main cargo during its most successful time.
              </p>
            </div>
            <div className="question-item">
              <p className="mb-2">
                <strong>10.</strong> As a captain and{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />,
                Woodget was very skilled.
              </p>
            </div>
            <div className="question-item">
              <p className="mb-2">
                <strong>11.</strong> Ferreira went to Falmouth to repair damage
                that a <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                had caused.
              </p>
            </div>
            <div className="question-item">
              <p className="mb-2">
                <strong>12.</strong> Between 1923 and 1954, Cutty Sark was used
                for <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>
            <div className="question-item">
              <p className="mb-2">
                <strong>13.</strong> Cutty Sark has twice been damaged by{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> in the
                21st century.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-17</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Write <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 14-17 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Why soil degradation could be a disaster for humans
            </h4>
            <p className="mb-4">
              Healthy soil contains a large variety of bacteria and other
              microorganisms, as well as plant remains and <strong>14.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. It
              provides us with food and also with antibiotics, and its function
              in storing <strong>15.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> has a
              significant effect on the climate. In addition, it prevents damage
              to property and infrastructure because it holds{" "}
              <strong>16.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. If these
              microorganisms are lost, soil may lose its special properties. The
              main factor contributing to soil degradation is the{" "}
              <strong>17.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> carried
              out by humans.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 18-21</h3>
          <p className="mb-2">
            Complete each sentence with the correct ending, <strong>A-F</strong>
            , below.
          </p>

          <div className="grid grid-cols-1 gap-2 mb-4">
            <p>
              <strong>A</strong> may improve the number and quality of plants
              growing there.
            </p>
            <p>
              <strong>B</strong> may contain data from up to nine countries.
            </p>
            <p>
              <strong>C</strong> may not be put back into the soil.
            </p>
            <p>
              <strong>D</strong> may help governments to be more aware of
              soil-related issues.
            </p>
            <p>
              <strong>E</strong> may cause damage to different aspects of the
              environment.
            </p>
            <p>
              <strong>F</strong> may be better for use at a global level.
            </p>
          </div>

          <p className="mb-4">
            Write the correct letter, <strong>A-F</strong>, in boxes 18-21 on
            your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>18.</strong> Nutrients contained in the unused parts of
                harvested crops
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q18-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q18-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q18-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>19.</strong> Synthetic fertilisers produced with
                Haber-Bosch process
              </p>
              <RadioGroup name="question19" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q19-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q19-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q19-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>20.</strong> Addition of a mixture developed by Pius
                Floris to the soil
              </p>
              <RadioGroup name="question20" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q20-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q20-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q20-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>21.</strong> The idea of zero net soil degradation
              </p>
              <RadioGroup name="question21" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q21-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q21-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q21-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 22-26</h3>
          <p className="mb-2">
            Reading Passage 2 has seven paragraphs, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes 22-26 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>22.</strong> a reference to one person's motivation for
                a soil-improvement project
              </p>
              <RadioGroup name="question22" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q22-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q22-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q22-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>23.</strong> an explanation of how soil stayed healthy
                before the development of farming
              </p>
              <RadioGroup name="question23" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q23-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q23-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q23-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>24.</strong> examples of different ways of collecting
                information on soil degradation
              </p>
              <RadioGroup name="question24" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q24-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q24-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q24-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>25.</strong> a suggestion for a way of keeping some
                types of soil safe in the near future
              </p>
              <RadioGroup name="question25" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q25-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q25-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q25-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>26.</strong> a reason why it is difficult to provide an
                overview of soil degradation
              </p>
              <RadioGroup name="question26" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q26-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q26-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q26-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-29</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 27-29 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> What is the reviewer's attitude to
                advocates of positive psychology?
              </p>
              <RadioGroup name="question27" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q27-a" value="A" />
                  <Label htmlFor="q27-a" className="ml-2">
                    A They are wrong to reject the ideas of Bentham.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-b" value="B" />
                  <Label htmlFor="q27-b" className="ml-2">
                    B They are over-influenced by their study of Bentham's
                    theories.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-c" value="C" />
                  <Label htmlFor="q27-c" className="ml-2">
                    C They have a fresh new approach to ideas on human
                    happiness.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-d" value="D" />
                  <Label htmlFor="q27-d" className="ml-2">
                    D They are ignorant about the ideas they should be
                    considering.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> The reviewer refers to the Greek
                philosopher Aristotle in order to suggest that happiness
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A may not be just pleasure and the absence of pain.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B should not be the main goal of humans.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C is not something that should be fought for.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D is not just an abstract concept.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> According to Davies, Bentham's suggestion
                for linking the price of goods to happiness was significant
                because
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A it was the first successful way of assessing happiness.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B it established a connection between work and psychology.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C it was the first successful example of psychological
                    research.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D it involved consideration of the rights of consumers.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 30-34</h3>
          <p className="mb-2">
            Complete the summary using the list of words <strong>A-G</strong>{" "}
            below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes 30-34 on
            your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Jeremy Bentham</h4>
            <p className="mb-4">
              Jeremy Bentham was active in other areas besides philosophy. In
              the 1790s he suggested a type of technology to improve{" "}
              <strong>30.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for
              different Government departments. He developed a new way of
              printing banknotes to increase <strong>31.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and also
              designed a method for the <strong>32.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of food.
              He also drew up plans for a prison which allowed the{" "}
              <strong>33.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of
              prisoners at all times, and believed the same design could be used
              for other institutions as well. When researching happiness, he
              investigated possibilities for its <strong>34.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, and
              suggested some methods of doing this.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <p>
              <strong>A</strong> measurement
            </p>
            <p>
              <strong>B</strong> security
            </p>
            <p>
              <strong>C</strong> implementation
            </p>
            <p>
              <strong>D</strong> profits
            </p>
            <p>
              <strong>E</strong> observation
            </p>
            <p>
              <strong>F</strong> communication
            </p>
            <p>
              <strong>G</strong> preservation
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 35-40</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 35-40 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>YES</strong> if the statement agrees with the claims of
              the writer
            </p>
            <p className="mb-1">
              <strong>NO</strong> if the statement contradicts the claims of the
              writer
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if it is impossible to say what the
              writer thinks about this
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> One strength of{" "}
                <em>The Happiness Industry</em> is its discussion of the
                relationship between psychology and economics.
              </p>
              <RadioGroup name="question35" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q35-yes" value="YES" />
                  <Label htmlFor="q35-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-no" value="NO" />
                  <Label htmlFor="q35-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-ng" value="NOT GIVEN" />
                  <Label htmlFor="q35-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>36.</strong> It is more difficult to measure some
                emotions than others.
              </p>
              <RadioGroup name="question36" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q36-yes" value="YES" />
                  <Label htmlFor="q36-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-no" value="NO" />
                  <Label htmlFor="q36-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-ng" value="NOT GIVEN" />
                  <Label htmlFor="q36-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> Watson's ideas on behaviourism were
                supported by research on humans he carried out before 1915.
              </p>
              <RadioGroup name="question37" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q37-yes" value="YES" />
                  <Label htmlFor="q37-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-no" value="NO" />
                  <Label htmlFor="q37-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-ng" value="NOT GIVEN" />
                  <Label htmlFor="q37-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>38.</strong> Watson's ideas have been most influential
                on governments outside America.
              </p>
              <RadioGroup name="question38" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-yes" value="YES" />
                  <Label htmlFor="q38-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-no" value="NO" />
                  <Label htmlFor="q38-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-ng" value="NOT GIVEN" />
                  <Label htmlFor="q38-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39.</strong> The need for happiness is linked to
                industrialisation.
              </p>
              <RadioGroup name="question39" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-yes" value="YES" />
                  <Label htmlFor="q39-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-no" value="NO" />
                  <Label htmlFor="q39-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-ng" value="NOT GIVEN" />
                  <Label htmlFor="q39-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>40.</strong> A main aim of government should be to
                increase the happiness of the population.
              </p>
              <RadioGroup name="question40" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-yes" value="YES" />
                  <Label htmlFor="q40-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-no" value="NO" />
                  <Label htmlFor="q40-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-ng" value="NOT GIVEN" />
                  <Label htmlFor="q40-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge13ARTest4Questions;
