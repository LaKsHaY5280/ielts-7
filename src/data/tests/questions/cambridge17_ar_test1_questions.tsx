// filepath: d:\ABYSS\CODE\WEB\FREELANCE\ielts 7 plus\ielts-7\src\data\tests\questions\cambridge17_ar_test1_questions.tsx
// Cambridge 17 Academic Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 17 Academic Reading Test 1
 */
export const Cambridge17ARTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-6</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-6 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">The London underground railway</h4>

            <p className="font-bold mb-2">The problem</p>
            <div className="question-item mb-4">
              <p className="mb-2">
                – The <strong>1.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> of
                London increased rapidly between 1800 and 1850
              </p>
              <p className="mb-2">
                – The streets were full of horse-drawn vehicles
              </p>
            </div>

            <p className="font-bold mb-2">The proposed solution</p>
            <div className="question-item mb-4">
              <p className="mb-2">
                – Charles Pearson, a solicitor, suggested building an
                underground railway
              </p>
              <p className="mb-2">
                – Building the railway would make it possible to move people to
                better housing in the <strong>2.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
              <p className="mb-2">
                – A number of <strong>3.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> agreed
                with Pearson's idea
              </p>
              <p className="mb-2">
                – The company initially had problems getting the{" "}
                <strong>4.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> needed
                for the project
              </p>
              <p className="mb-2">
                – Negative articles about the project appeared in the{" "}
                <strong>5.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>

            <p className="font-bold mb-2">The construction</p>
            <div className="question-item mb-4">
              <p className="mb-2">
                – The chosen route did not require many buildings to be pulled
                down
              </p>
              <p className="mb-2">
                – The 'cut and cover' method was used to construct the tunnels
              </p>
              <p className="mb-2">
                – With the completion of the brick arch, the tunnel was covered
                with <strong>6.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 7-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 7-13 on your answer sheet, write</p>
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
                <strong>7.</strong> Other countries had built underground
                railways before the Metropolitan line opened.
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
                <strong>8.</strong> More people than predicted travelled on the
                Metropolitan line on the first day.
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

            <div className="question-item">
              <p className="mb-3">
                <strong>9.</strong> The use of ventilation shafts failed to
                prevent pollution in the tunnels.
              </p>
              <RadioGroup name="question9" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q9-true" value="TRUE" />
                  <Label htmlFor="q9-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-false" value="FALSE" />
                  <Label htmlFor="q9-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-ng" value="NOT GIVEN" />
                  <Label htmlFor="q9-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10.</strong> A different approach from the 'cut and
                cover' technique was required in London's central area.
              </p>
              <RadioGroup name="question10" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q10-true" value="TRUE" />
                  <Label htmlFor="q10-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-false" value="FALSE" />
                  <Label htmlFor="q10-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-ng" value="NOT GIVEN" />
                  <Label htmlFor="q10-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11.</strong> The windows on City & South London trains
                were at eye level.
              </p>
              <RadioGroup name="question11" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q11-true" value="TRUE" />
                  <Label htmlFor="q11-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-false" value="FALSE" />
                  <Label htmlFor="q11-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-ng" value="NOT GIVEN" />
                  <Label htmlFor="q11-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12.</strong> The City & South London Railway was a
                financial success.
              </p>
              <RadioGroup name="question12" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q12-true" value="TRUE" />
                  <Label htmlFor="q12-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-false" value="FALSE" />
                  <Label htmlFor="q12-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-ng" value="NOT GIVEN" />
                  <Label htmlFor="q12-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13.</strong> Trains on the 'Tuppenny Tube' nearly always
                ran on time.
              </p>
              <RadioGroup name="question13" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q13-true" value="TRUE" />
                  <Label htmlFor="q13-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-false" value="FALSE" />
                  <Label htmlFor="q13-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-ng" value="NOT GIVEN" />
                  <Label htmlFor="q13-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-17</h3>
          <p className="mb-2">
            Reading Passage 2 has seven paragraphs, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes 14-17 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> A mention of negative attitudes towards
                stadium building projects
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q14-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q14-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q14-${letter.toLowerCase()}`}
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
                <strong>15.</strong> Figures demonstrating the environmental
                benefits of a certain stadium
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q15-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q15-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q15-${letter.toLowerCase()}`}
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
                <strong>16.</strong> Examples of the wide range of facilities
                available at some new stadiums
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q16-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q16-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q16-${letter.toLowerCase()}`}
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
                <strong>17.</strong> Reference to the disadvantages of the
                stadiums built during a certain era
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q17-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q17-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q17-${letter.toLowerCase()}`}
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
          <h3 className="font-bold mb-2">Questions 18-22</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 18-22 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Roman amphitheatres</h4>

            <p className="mb-4">
              The Roman stadiums of Europe have proved very versatile. The
              amphitheatre of Arles, for example, was converted first into a{" "}
              <strong>18.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, then
              into a residential area and finally into an arena where spectators
              could watch
              <strong>19.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
              Meanwhile, the arena in Verona, one of the oldest Roman
              amphitheatres, is famous today as a venue where
              <strong>20.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is
              performed. The site of Lucca's amphitheatre has also been used for
              many purposes over the centuries, including the storage of
              <strong>21.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. It is
              now a market square with
              <strong>22.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and homes
              incorporated into the remains of the Roman amphitheatre.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-24</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 23-24 on your answer sheet.
          </p>

          <p className="mb-4">
            When comparing twentieth-century stadiums to ancient amphitheatres
            in Section <strong>D</strong>, which <strong>TWO</strong> negative
            features does the writer mention?
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q23-24-a" value="A" />
              <Label htmlFor="q23-24-a" className="ml-2">
                A They are less imaginatively designed
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-b" value="B" />
              <Label htmlFor="q23-24-b" className="ml-2">
                B They are less spacious
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-c" value="C" />
              <Label htmlFor="q23-24-c" className="ml-2">
                C They are in less convenient locations
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-d" value="D" />
              <Label htmlFor="q23-24-d" className="ml-2">
                D They are less versatile
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-e" value="E" />
              <Label htmlFor="q23-24-e" className="ml-2">
                E They are made of less durable materials
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 25-26</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 25-26 on your answer sheet.
          </p>

          <p className="mb-4">
            Which <strong>TWO</strong> advantages of modern stadium design does
            the writer mention?
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q25-26-a" value="A" />
              <Label htmlFor="q25-26-a" className="ml-2">
                A offering improved amenities for the enjoyment of sports events
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-b" value="B" />
              <Label htmlFor="q25-26-b" className="ml-2">
                B bringing community life back into the city environment
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-c" value="C" />
              <Label htmlFor="q25-26-c" className="ml-2">
                C facilitating research into solar and wind energy solutions
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-d" value="D" />
              <Label htmlFor="q25-26-d" className="ml-2">
                D enabling local residents to reduce their consumption of
                electricity
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-e" value="E" />
              <Label htmlFor="q25-26-e" className="ml-2">
                E providing a suitable site for the installation of renewable
                power generators
              </Label>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">
            Complete the summary using the list of phrases, <strong>A-J</strong>
            , below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-J</strong>, in boxes 27-31 on
            your answer sheet.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <p>
              <strong>A</strong> military innovation
            </p>
            <p>
              <strong>F</strong> decisive victory
            </p>
            <p>
              <strong>B</strong> large reward
            </p>
            <p>
              <strong>G</strong> political debate
            </p>
            <p>
              <strong>C</strong> widespread conspiracy
            </p>
            <p>
              <strong>H</strong> strategic alliance
            </p>
            <p>
              <strong>D</strong> relative safety
            </p>
            <p>
              <strong>I</strong> popular solution
            </p>
            <p>
              <strong>E</strong> new government
            </p>
            <p>
              <strong>J</strong> religious conviction
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              The story behind the hunt for Charles II
            </h4>

            <p className="mb-4">
              Charles II's father was executed by the Parliamentarian forces in
              1649. Charles II then formed a<strong>27.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> with the
              Scots, and in order to become King of Scots, he abandoned an
              important
              <strong>28.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> that was
              held by his father and had contributed to his father's death. The
              opposing sides then met outside Worcester in 1651. The battle led
              to a<strong>29.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for the
              Parliamentarians and Charles had to flee for his life. A
              <strong>30.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> was
              offered for Charles's capture, but after six weeks spent in
              hiding, he eventually managed to reach the
              <strong>31.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of
              continental Europe.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-35</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 32-35 on your answer sheet, write</p>
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
                <strong>32.</strong> Charles chose Pepys for the task because he
                considered him to be trustworthy.
              </p>
              <RadioGroup name="question32" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-yes" value="YES" />
                  <Label htmlFor="q32-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-no" value="NO" />
                  <Label htmlFor="q32-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-ng" value="NOT GIVEN" />
                  <Label htmlFor="q32-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> Charles's personal recollection of the
                escape lacked sufficient detail.
              </p>
              <RadioGroup name="question33" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q33-yes" value="YES" />
                  <Label htmlFor="q33-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-no" value="NO" />
                  <Label htmlFor="q33-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-ng" value="NOT GIVEN" />
                  <Label htmlFor="q33-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> Charles indicated to Pepys that he had
                planned his escape before the battle.
              </p>
              <RadioGroup name="question34" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q34-yes" value="YES" />
                  <Label htmlFor="q34-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-no" value="NO" />
                  <Label htmlFor="q34-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-ng" value="NOT GIVEN" />
                  <Label htmlFor="q34-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> The inclusion of Charles's account is a
                positive aspect of the book.
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong>, or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 36-40 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>36.</strong> What is the reviewer's main purpose in the
                first paragraph?
              </p>
              <RadioGroup name="question36" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q36-a" value="A" />
                  <Label htmlFor="q36-a" className="ml-2">
                    A to describe what happened during the Battle of Worcester
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-b" value="B" />
                  <Label htmlFor="q36-b" className="ml-2">
                    B to give an account of the circumstances leading to Charles
                    II's escape
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-c" value="C" />
                  <Label htmlFor="q36-c" className="ml-2">
                    C to provide details of the Parliamentarians' political
                    views
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-d" value="D" />
                  <Label htmlFor="q36-d" className="ml-2">
                    D to compare Charles II's beliefs with those of his father
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> Why does the reviewer include examples of
                the fugitives' behaviour in the third paragraph?
              </p>
              <RadioGroup name="question37" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q37-a" value="A" />
                  <Label htmlFor="q37-a" className="ml-2">
                    A to explain how close Charles II came to losing his life
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-b" value="B" />
                  <Label htmlFor="q37-b" className="ml-2">
                    B to suggest that Charles II's supporters were badly
                    prepared
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-c" value="C" />
                  <Label htmlFor="q37-c" className="ml-2">
                    C to illustrate how the events of the six weeks are brought
                    to life
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-d" value="D" />
                  <Label htmlFor="q37-d" className="ml-2">
                    D to argue that certain aspects are not as well known as
                    they should be
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>38.</strong> What point does the reviewer make about
                Charles II in the fourth paragraph?
              </p>
              <RadioGroup name="question38" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-a" value="A" />
                  <Label htmlFor="q38-a" className="ml-2">
                    A He chose to celebrate an unsuccessful phase of his life.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-b" value="B" />
                  <Label htmlFor="q38-b" className="ml-2">
                    B He misunderstood how unpopular his father had been with
                    the English people.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-c" value="C" />
                  <Label htmlFor="q38-c" className="ml-2">
                    C He failed to recognize how fortunate he had been to
                    escape.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-d" value="D" />
                  <Label htmlFor="q38-d" className="ml-2">
                    D He was unaware of the impact of his story on the English
                    royal family.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39.</strong> What does the reviewer say about Charles
                Spencer in the fifth paragraph?
              </p>
              <RadioGroup name="question39" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-a" value="A" />
                  <Label htmlFor="q39-a" className="ml-2">
                    A He is very knowledgeable about the historical period in
                    question.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-b" value="B" />
                  <Label htmlFor="q39-b" className="ml-2">
                    B He displays a certain prejudice against Charles II.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-c" value="C" />
                  <Label htmlFor="q39-c" className="ml-2">
                    C He has a particularly simple and direct writing style.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-d" value="D" />
                  <Label htmlFor="q39-d" className="ml-2">
                    D He concentrates more on factual information than on
                    analysis.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>40.</strong> Which of the following best summarizes the
                reviewer's opinion of the book?
              </p>
              <RadioGroup name="question40" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-a" value="A" />
                  <Label htmlFor="q40-a" className="ml-2">
                    A It maintains the reader's interest despite the historian's
                    occasionally awkward style.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-b" value="B" />
                  <Label htmlFor="q40-b" className="ml-2">
                    B It is a compelling account of the events though with some
                    minor weaknesses.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-c" value="C" />
                  <Label htmlFor="q40-c" className="ml-2">
                    C It would be better if it included more analysis of Charles
                    II's political role.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-d" value="D" />
                  <Label htmlFor="q40-d" className="ml-2">
                    D It provides an original analysis of Charles II's character
                    which may lead to debate.
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

export default Cambridge17ARTest1Questions;
