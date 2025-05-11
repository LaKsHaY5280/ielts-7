// Cambridge 16 Academic Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 16 Academic Reading Test 1
 */
export const Cambridge16ARTest1Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 1: Questions 1-13
      </h2>

      {/* Questions 1-8 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-8</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the passage for each
          answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 1-8 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">Stepwells</h4>
          <p className="mb-2">
            • Wells designed with steps to reach down to the water
          </p>
          <p className="mb-2">
            • Built with Persian architectural style that included{" "}
            <strong>1</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> features
          </p>
          <p className="mb-2">
            • Used for many purposes like <strong>2</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />, washing
            and bathing
          </p>
          <p className="mb-2">
            • Earliest known stepwell dates from the <strong>3</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> century
          </p>
          <p className="mb-2">
            • Made of <strong>4</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and
            designed to last for centuries
          </p>
          <p className="mb-2">
            • Victoria Lautman has collected <strong>5</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> of
            stepwells in India
          </p>
          <p className="mb-2">
            • Also served as places to escape from extreme <strong>6</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> in summer
          </p>
          <p className="mb-2">
            • Were often financed by <strong>7</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> women
          </p>
          <p className="mb-2">
            • British saw them as unhygienic and sources of <strong>8</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
        </div>
      </div>

      {/* Questions 9-13 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 9-13</h3>
        <p className="mb-2">
          Complete each sentence with the correct ending, <strong>A-F</strong>,
          below.
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A-F</strong>, in boxes 9-13 on your
          answer sheet.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Endings</strong>
          </p>
          <p className="mb-1">
            <strong>A</strong> are less knowledgeable about stepwells than
            foreigners.
          </p>
          <p className="mb-1">
            <strong>B</strong> have contributed to the destruction of stepwells.
          </p>
          <p className="mb-1">
            <strong>C</strong> can still visit functioning stepwells.
          </p>
          <p className="mb-1">
            <strong>D</strong> allowed women to meet socially outside the home.
          </p>
          <p className="mb-1">
            <strong>E</strong> have been given different names in different
            regions.
          </p>
          <p className="mb-1">
            <strong>F</strong> have been honoured by the United Nations.
          </p>
        </div>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>9.</strong> According to Lautman, stepwells
            </p>
            <RadioGroup name="question9" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q9-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q9-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q9-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>10.</strong> Many local people
            </p>
            <RadioGroup name="question10" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q10-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q10-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q10-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>11.</strong> Stepwells
            </p>
            <RadioGroup name="question11" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q11-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q11-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q11-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>12.</strong> Some of the most impressive stepwells
            </p>
            <RadioGroup name="question12" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q12-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q12-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q12-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>13.</strong> Years of neglect
            </p>
            <RadioGroup name="question13" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q13-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q13-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q13-${letter.toLowerCase()}`}
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

      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 2: Questions 14-26
      </h2>

      {/* Questions 14-20 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 14-20</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in the
          passage?
        </p>
        <p className="mb-2">In boxes 14-20 on your answer sheet, write</p>
        <div className="mb-4">
          <p className="mb-1">
            <strong>TRUE</strong> if the statement agrees with the information
          </p>
          <p className="mb-1">
            <strong>FALSE</strong> if the statement contradicts the information
          </p>
          <p className="mb-1">
            <strong>NOT GIVEN</strong> if there is no information on this
          </p>
        </div>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>14.</strong> People generally understand what is meant by
              the term "intelligence".
            </p>
            <RadioGroup name="question14" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q14-true" value="TRUE" />
                <Label htmlFor="q14-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q14-false" value="FALSE" />
                <Label htmlFor="q14-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q14-ng" value="NOT GIVEN" />
                <Label htmlFor="q14-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>15.</strong> People who believe that knowledge
              demonstrates intelligence are likely to value the memorization of
              facts.
            </p>
            <RadioGroup name="question15" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q15-true" value="TRUE" />
                <Label htmlFor="q15-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-false" value="FALSE" />
                <Label htmlFor="q15-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-ng" value="NOT GIVEN" />
                <Label htmlFor="q15-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>16.</strong> Intelligence tests are becoming more similar
              across different cultures.
            </p>
            <RadioGroup name="question16" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q16-true" value="TRUE" />
                <Label htmlFor="q16-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-false" value="FALSE" />
                <Label htmlFor="q16-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-ng" value="NOT GIVEN" />
                <Label htmlFor="q16-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>17.</strong> What ordinary people believe about
              intelligence can provide valuable insights for scientific
              researchers.
            </p>
            <RadioGroup name="question17" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q17-true" value="TRUE" />
                <Label htmlFor="q17-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-false" value="FALSE" />
                <Label htmlFor="q17-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-ng" value="NOT GIVEN" />
                <Label htmlFor="q17-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>18.</strong> Intelligence depends more on the context and
              environment in Western cultures than in some Eastern cultures.
            </p>
            <RadioGroup name="question18" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q18-true" value="TRUE" />
                <Label htmlFor="q18-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-false" value="FALSE" />
                <Label htmlFor="q18-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-ng" value="NOT GIVEN" />
                <Label htmlFor="q18-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>19.</strong> Children who believe that intelligence is
              fixed are more likely to give up when they fail at something.
            </p>
            <RadioGroup name="question19" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q19-true" value="TRUE" />
                <Label htmlFor="q19-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q19-false" value="FALSE" />
                <Label htmlFor="q19-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q19-ng" value="NOT GIVEN" />
                <Label htmlFor="q19-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>20.</strong> Parents who adopt a 'growth mindset' are more
              likely to focus on their child's potential ability than on the
              effort they make.
            </p>
            <RadioGroup name="question20" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q20-true" value="TRUE" />
                <Label htmlFor="q20-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q20-false" value="FALSE" />
                <Label htmlFor="q20-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q20-ng" value="NOT GIVEN" />
                <Label htmlFor="q20-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 21-26 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 21-26</h3>
        <p className="mb-2">
          Complete the summary using the list of words, A-J, below.
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A-J</strong>, in boxes 21-26 on your
          answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">
            Differences in how intelligence is viewed
          </h4>
          <p className="mb-4">
            There is more <strong>21</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> in implicit
            theories of intelligence than in scientific theories. For example,
            some people think intelligence is about book learning, while others
            believe it has more to do with <strong>22</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. Research
            shows that Westerners tend to see intelligence as a tool for putting
            things into <strong>23</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and
            engaging in logical discussion, whereas some Eastern cultures see it
            as a way to recognize <strong>24</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and
            understand social roles. The difference is that in Western cultures,
            intelligence is seen as <strong>25</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> to the
            person, while in some Eastern cultures, it is viewed as arising from
            the relationship between people and their <strong>26</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />.
          </p>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="mb-1">
                <strong>A</strong> behaviour
              </p>
              <p className="mb-1">
                <strong>B</strong> categories
              </p>
              <p className="mb-1">
                <strong>C</strong> collaboration
              </p>
              <p className="mb-1">
                <strong>D</strong> comparison
              </p>
              <p className="mb-1">
                <strong>E</strong> contradiction
              </p>
            </div>
            <div>
              <p className="mb-1">
                <strong>F</strong> context
              </p>
              <p className="mb-1">
                <strong>G</strong> creativity
              </p>
              <p className="mb-1">
                <strong>H</strong> inherent
              </p>
              <p className="mb-1">
                <strong>I</strong> street smarts
              </p>
              <p className="mb-1">
                <strong>J</strong> variation
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 3: Questions 27-40
      </h2>

      {/* Questions 27-32 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 27-32</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 27-32 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>27.</strong> What is the significance of the mother-baby
              experiment described by the Brafmans?
            </p>
            <RadioGroup name="question27" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q27-a" value="A" />
                <Label htmlFor="q27-a" className="ml-2">
                  A It shows how attachments develop between parent and child.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-b" value="B" />
                <Label htmlFor="q27-b" className="ml-2">
                  B It illustrates how mothers can confuse their own child with
                  another.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-c" value="C" />
                <Label htmlFor="q27-c" className="ml-2">
                  C It demonstrates that infants understand the concept of
                  ownership.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-d" value="D" />
                <Label htmlFor="q27-d" className="ml-2">
                  D It reveals the strong feelings generated by possession.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>28.</strong> In Bruce Hood's copying machine experiment,
              what did most children do?
            </p>
            <RadioGroup name="question28" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q28-a" value="A" />
                <Label htmlFor="q28-a" className="ml-2">
                  A They wanted to keep the original toy.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-b" value="B" />
                <Label htmlFor="q28-b" className="ml-2">
                  B They couldn't tell which toy was the copy.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-c" value="C" />
                <Label htmlFor="q28-c" className="ml-2">
                  C They preferred the copy of the toy.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-d" value="D" />
                <Label htmlFor="q28-d" className="ml-2">
                  D They were upset by the copying process.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>29.</strong> What does the 'endowment effect' refer to?
            </p>
            <RadioGroup name="question29" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q29-a" value="A" />
                <Label htmlFor="q29-a" className="ml-2">
                  A the need to pay more for an object we desire
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-b" value="B" />
                <Label htmlFor="q29-b" className="ml-2">
                  B the reluctance to exchange something we have been given
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-c" value="C" />
                <Label htmlFor="q29-c" className="ml-2">
                  C the tendency to collect similar items
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-d" value="D" />
                <Label htmlFor="q29-d" className="ml-2">
                  D the habit of becoming attached to gifts
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>30.</strong> According to the Brafmans, what can make us
              feel a sense of ownership?
            </p>
            <RadioGroup name="question30" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q30-a" value="A" />
                <Label htmlFor="q30-a" className="ml-2">
                  A having the legal right to an object
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-b" value="B" />
                <Label htmlFor="q30-b" className="ml-2">
                  B marking something as your own property
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-c" value="C" />
                <Label htmlFor="q30-c" className="ml-2">
                  C establishing boundaries around something
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-d" value="D" />
                <Label htmlFor="q30-d" className="ml-2">
                  D paying a fair price for an object
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>31.</strong> What point is made about the use of the word
              'homeland' in politics?
            </p>
            <RadioGroup name="question31" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q31-a" value="A" />
                <Label htmlFor="q31-a" className="ml-2">
                  A It suggests that everyone has rights within a country.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-b" value="B" />
                <Label htmlFor="q31-b" className="ml-2">
                  B It strengthens people's sense of ownership of their country.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-c" value="C" />
                <Label htmlFor="q31-c" className="ml-2">
                  C It implies that the people are controlled by the state.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-d" value="D" />
                <Label htmlFor="q31-d" className="ml-2">
                  D It establishes legal rights to a geographic area.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>32.</strong> Which of the following was demonstrated in
              Festinger's experiment?
            </p>
            <RadioGroup name="question32" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q32-a" value="A" />
                <Label htmlFor="q32-a" className="ml-2">
                  A People value things more when they have worked harder to get
                  them.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-b" value="B" />
                <Label htmlFor="q32-b" className="ml-2">
                  B People perform better when they are promised rewards.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-c" value="C" />
                <Label htmlFor="q32-c" className="ml-2">
                  C People prefer to complete difficult puzzles rather than easy
                  ones.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-d" value="D" />
                <Label htmlFor="q32-d" className="ml-2">
                  D People enjoy discussions more when they're in larger groups.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 33-37 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 33-37</h3>
        <p className="mb-2">
          Complete each sentence with the correct ending, <strong>A-G</strong>,
          below.
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A-G</strong>, in boxes 33-37 on your
          answer sheet.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Endings</strong>
          </p>
          <p className="mb-1">
            <strong>A</strong> have clear national borders.
          </p>
          <p className="mb-1">
            <strong>B</strong> choose origami made by experts.
          </p>
          <p className="mb-1">
            <strong>C</strong> value their origami creations highly.
          </p>
          <p className="mb-1">
            <strong>D</strong> feel resistant to changes to their work.
          </p>
          <p className="mb-1">
            <strong>E</strong> see value in the component parts.
          </p>
          <p className="mb-1">
            <strong>F</strong> pay more than buyers for coffee mugs.
          </p>
          <p className="mb-1">
            <strong>G</strong> sell their possessions readily.
          </p>
        </div>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>33.</strong> In a study of buying and selling, people who
              were given mugs
            </p>
            <RadioGroup name="question33" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q33-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q33-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q33-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>34.</strong> People who fold origami animals
            </p>
            <RadioGroup name="question34" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q34-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q34-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q34-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>35.</strong> People can view a country as something they
              own when the country
            </p>
            <RadioGroup name="question35" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q35-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q35-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q35-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>36.</strong> Buyers of IKEA furniture often
            </p>
            <RadioGroup name="question36" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q36-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q36-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q36-${letter.toLowerCase()}`}
                    className="ml-2"
                  >
                    {letter}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>37.</strong> Software engineers who develop features that
              are later cut
            </p>
            <RadioGroup name="question37" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q37-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q37-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q37-${letter.toLowerCase()}`}
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

      {/* Questions 38-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 38-40</h3>
        <p className="mb-2">
          Choose <strong>THREE</strong> letters, <strong>A-G</strong>.
        </p>
        <p className="mb-4">
          Write the correct letters in boxes 38-40 on your answer sheet.
        </p>

        <p className="mb-4">
          Which <strong>THREE</strong> of the following statements are true,
          according to the passage?
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <input type="checkbox" id="q38-40-a" className="mt-1" />
            <label htmlFor="q38-40-a" className="text-sm">
              <strong>A</strong> People develop feelings of ownership by two
              years of age.
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="q38-40-b" className="mt-1" />
            <label htmlFor="q38-40-b" className="text-sm">
              <strong>B</strong> People feel more attached to origami they have
              made themselves than to identical ones made by others.
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="q38-40-c" className="mt-1" />
            <label htmlFor="q38-40-c" className="text-sm">
              <strong>C</strong> A sense of ownership can only develop for
              objects that are legally owned.
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="q38-40-d" className="mt-1" />
            <label htmlFor="q38-40-d" className="text-sm">
              <strong>D</strong> Feelings of ownership are generally equivalent
              for all members of a team.
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="q38-40-e" className="mt-1" />
            <label htmlFor="q38-40-e" className="text-sm">
              <strong>E</strong> Children believe that even identical copies do
              not possess the same qualities as the original.
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="q38-40-f" className="mt-1" />
            <label htmlFor="q38-40-f" className="text-sm">
              <strong>F</strong> People are more likely to give away possessions
              they have created themselves.
            </label>
          </div>
          <div className="flex items-start gap-2">
            <input type="checkbox" id="q38-40-g" className="mt-1" />
            <label htmlFor="q38-40-g" className="text-sm">
              <strong>G</strong> People feel a stronger sense of ownership for
              objects they have worked hard to acquire.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cambridge16ARTest1Questions;
