// Cambridge 16 Academic Reading Test 3 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 16 Academic Reading Test 3
 */
export const Cambridge16ARTest3Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 1: Questions 1-13
      </h2>

      {/* Questions 1-7 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-7</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in
          Reading Passage 1?
        </p>
        <p className="mb-2">In boxes 1-7 on your answer sheet, write</p>
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
              <strong>1.</strong> We now fully understand the production methods
              used for ancient glass.
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
              <strong>2.</strong> In chemical terms, ordinary glass could be
              considered a liquid rather than a solid.
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
              <strong>3.</strong> Archaeologists have found examples of currency
              made from natural glass.
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
              <strong>4.</strong> The story about the Phoenician sailors
              discovering glass is likely to be accurate.
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
              <strong>5.</strong> The Middle Eastern glass was valued by the
              Romans for its colour.
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
              <strong>6.</strong> There was a trend towards larger window panes
              in the 17th century.
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
              <strong>7.</strong> The Crystal Palace was the first building to
              be constructed entirely of iron and glass.
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
        </div>
      </div>

      {/* Questions 8-13 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 8-13</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the passage for each
          answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 8-13 on your answer sheet.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">
            Development of glass use in construction
          </h4>

          <p className="mb-2">19th century</p>
          <p className="ml-4 mb-1">
            • Large glass windows used in public buildings
          </p>
          <p className="ml-4 mb-1">
            • Glass used to build structures to grow fruit and{" "}
            <strong>8</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
          <p className="ml-4 mb-1">
            • Architects used glass to reflect the <strong>9</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> of a
            building
          </p>
          <p className="ml-4 mb-3">
            • New plate glass process using <strong>10</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> glass
          </p>

          <p className="mb-2">20th century</p>
          <p className="ml-4 mb-1">
            • Louis Sullivan's use of glass in skyscrapers influenced by new
            building methods using steel <strong>11</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and
            supports
          </p>
          <p className="ml-4 mb-1">
            • European architects influenced by ideas of the future based on{" "}
            <strong>12</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
          <p className="ml-4 mb-1">
            • Architects sought to create environments full of light but{" "}
            <strong>13</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> from the
            outside world
          </p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 2: Questions 14-26
      </h2>

      {/* Questions 14-18 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 14-18</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 14-18 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>14.</strong> What does the author say about phrenology in
              the first paragraph?
            </p>
            <RadioGroup name="question14" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q14-a" value="A" />
                <Label htmlFor="q14-a" className="ml-2">
                  A It was the first scientific theory of brain function.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q14-b" value="B" />
                <Label htmlFor="q14-b" className="ml-2">
                  B It had numerous practical applications.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q14-c" value="C" />
                <Label htmlFor="q14-c" className="ml-2">
                  C It was based on incorrect assumptions about brain structure.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q14-d" value="D" />
                <Label htmlFor="q14-d" className="ml-2">
                  D It was quickly dismissed by the scientific community.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>15.</strong> According to current understanding, what is
              the role of the limbic system?
            </p>
            <RadioGroup name="question15" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q15-a" value="A" />
                <Label htmlFor="q15-a" className="ml-2">
                  A It determines how we respond to memories.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-b" value="B" />
                <Label htmlFor="q15-b" className="ml-2">
                  B It creates emotional responses to situations.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-c" value="C" />
                <Label htmlFor="q15-c" className="ml-2">
                  C It processes information from our senses.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-d" value="D" />
                <Label htmlFor="q15-d" className="ml-2">
                  D It guides our logical decision-making.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>16.</strong> Which feature distinguishes the human
              neocortex from that of other mammals?
            </p>
            <RadioGroup name="question16" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q16-a" value="A" />
                <Label htmlFor="q16-a" className="ml-2">
                  A its size
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-b" value="B" />
                <Label htmlFor="q16-b" className="ml-2">
                  B its complexity
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-c" value="C" />
                <Label htmlFor="q16-c" className="ml-2">
                  C its position
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-d" value="D" />
                <Label htmlFor="q16-d" className="ml-2">
                  D its function
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>17.</strong> What point is the writer making in the 6th
              paragraph?
            </p>
            <RadioGroup name="question17" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q17-a" value="A" />
                <Label htmlFor="q17-a" className="ml-2">
                  A Brain functions are more complex than previously thought.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-b" value="B" />
                <Label htmlFor="q17-b" className="ml-2">
                  B The study of brain function has become more accurate.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-c" value="C" />
                <Label htmlFor="q17-c" className="ml-2">
                  C The division of the brain into modules is no longer
                  accepted.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-d" value="D" />
                <Label htmlFor="q17-d" className="ml-2">
                  D Early theories about brain modules were basically correct.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>18.</strong> What did MacLean get wrong about evolution?
            </p>
            <RadioGroup name="question18" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q18-a" value="A" />
                <Label htmlFor="q18-a" className="ml-2">
                  A He thought it progressed in a straightforward way.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-b" value="B" />
                <Label htmlFor="q18-b" className="ml-2">
                  B He underestimated the importance of adaptation.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-c" value="C" />
                <Label htmlFor="q18-c" className="ml-2">
                  C He didn't recognize the importance of environmental factors.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-d" value="D" />
                <Label htmlFor="q18-d" className="ml-2">
                  D He didn't consider the evolutionary path of birds.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 19-22 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 19-22</h3>
        <p className="mb-2">
          Complete each sentence with the correct ending, <strong>A-F</strong>,
          below.
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A-F</strong>, in boxes 19-22 on your
          answer sheet.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Endings</strong>
          </p>
          <p className="mb-1">
            <strong>A</strong> are interconnected with numerous other brain
            regions.
          </p>
          <p className="mb-1">
            <strong>B</strong> can be stronger than reason.
          </p>
          <p className="mb-1">
            <strong>C</strong> is not supported by modern scientific evidence.
          </p>
          <p className="mb-1">
            <strong>D</strong> went through several stages of development.
          </p>
          <p className="mb-1">
            <strong>E</strong> is generated by the interaction of several brain
            regions.
          </p>
          <p className="mb-1">
            <strong>F</strong> were not present in early mammals.
          </p>
        </div>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>19.</strong> According to MacLean's model, the human brain
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
            <p className="mb-2">
              <strong>20.</strong> The idea that specific emotions are located
              in specific brain structures
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
            <p className="mb-2">
              <strong>21.</strong> Modern research suggests that the emotion of
              anger
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

          <div className="question-item">
            <p className="mb-2">
              <strong>22.</strong> Some structures in the limbic system
            </p>
            <RadioGroup name="question22" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
        </div>
      </div>

      {/* Questions 23-26 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 23-26</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 23-26 on your answer sheet.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">The triune brain model</h4>

          <p className="mb-4">
            MacLean's model divided the brain into three parts. The oldest part,
            the 'R-complex', includes the <strong>23</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and brain
            stem. According to MacLean, this part governs instinctive behavior
            connected to <strong>24</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. The second
            part to evolve was the limbic system, while the most recent addition
            was the <strong>25</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. Although
            the model was influential, some critics have argued that it reflects
            a type of <strong>26</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />, similar to
            the ideas of René Descartes.
          </p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 3: Questions 27-40
      </h2>

      {/* Questions 27-31 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 27-31</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 27-31 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>27.</strong> What criticism was made of financial
              performance measures in the 1980s?
            </p>
            <RadioGroup name="question27" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q27-a" value="A" />
                <Label htmlFor="q27-a" className="ml-2">
                  A They focused too much on the company's past.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-b" value="B" />
                <Label htmlFor="q27-b" className="ml-2">
                  B They were too complicated to be useful.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-c" value="C" />
                <Label htmlFor="q27-c" className="ml-2">
                  C They ignored the role of innovation.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-d" value="D" />
                <Label htmlFor="q27-d" className="ml-2">
                  D They required too much time to prepare.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>28.</strong> What is identified as the key advantage of
              the Balanced Scorecard approach?
            </p>
            <RadioGroup name="question28" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q28-a" value="A" />
                <Label htmlFor="q28-a" className="ml-2">
                  A It shows the connections between different business
                  activities.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-b" value="B" />
                <Label htmlFor="q28-b" className="ml-2">
                  B It provides a comprehensive view of an organization's
                  performance.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-c" value="C" />
                <Label htmlFor="q28-c" className="ml-2">
                  C It works especially well for manufacturing businesses.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-d" value="D" />
                <Label htmlFor="q28-d" className="ml-2">
                  D It is easy for all employees to understand and implement.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>29.</strong> The Balanced Scorecard is different from
              previous performance measurement systems because
            </p>
            <RadioGroup name="question29" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q29-a" value="A" />
                <Label htmlFor="q29-a" className="ml-2">
                  A it focuses on non-financial measures rather than financial
                  ones.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-b" value="B" />
                <Label htmlFor="q29-b" className="ml-2">
                  B it reflects the increasing complexity of global business.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-c" value="C" />
                <Label htmlFor="q29-c" className="ml-2">
                  C it considers financial measures alongside other factors.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-d" value="D" />
                <Label htmlFor="q29-d" className="ml-2">
                  D it emphasizes the role of innovation and customer
                  satisfaction.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>30.</strong> According to the passage, what is one issue
              in implementing a Balanced Scorecard?
            </p>
            <RadioGroup name="question30" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q30-a" value="A" />
                <Label htmlFor="q30-a" className="ml-2">
                  A determining what to do if a strategy isn't working
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-b" value="B" />
                <Label htmlFor="q30-b" className="ml-2">
                  B deciding how many measures to include
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-c" value="C" />
                <Label htmlFor="q30-c" className="ml-2">
                  C obtaining employees' support for the system
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-d" value="D" />
                <Label htmlFor="q30-d" className="ml-2">
                  D linking the measures to financial incentives
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>31.</strong> The example of the electronics manufacturer
              is given to illustrate
            </p>
            <RadioGroup name="question31" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q31-a" value="A" />
                <Label htmlFor="q31-a" className="ml-2">
                  A how to set appropriately challenging performance targets.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-b" value="B" />
                <Label htmlFor="q31-b" className="ml-2">
                  B how benchmarks can be used to raise quality standards.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-c" value="C" />
                <Label htmlFor="q31-c" className="ml-2">
                  C how targets need to be revised as performance improves.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-d" value="D" />
                <Label htmlFor="q31-d" className="ml-2">
                  D how manufacturing companies benefit from precise targets.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 32-35 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 32-35</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 32-35 on your answer sheet.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-2">
            The Strategic Role of the Balanced Scorecard
          </h4>

          <p className="mb-4">
            The Balanced Scorecard approach requires managers to begin by
            agreeing on their company's <strong>32</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and how to
            achieve it. This helps to ensure clarity about the organization's
            direction. The method can also play a key role in communication, as
            research suggests that a high percentage of employees may not
            understand their organization's <strong>33</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. By using
            the Balanced Scorecard, employees at all levels become aware of what{" "}
            <strong>34</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> are
            critical to success. Another benefit is that the approach can be
            used to monitor how well a strategy is being implemented. If the
            strategy is not working as intended, the Balanced Scorecard provides{" "}
            <strong>35</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> that allows
            adjustments to be made.
          </p>
        </div>
      </div>

      {/* Questions 36-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 36-40</h3>
        <p className="mb-2">
          Do the following statements agree with the claims of the writer in
          Reading Passage 3?
        </p>
        <p className="mb-2">In boxes 36-40 on your answer sheet, write</p>
        <div className="mb-4">
          <p className="mb-1">
            <strong>YES</strong> if the statement agrees with the claims of the
            writer
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
              <strong>36.</strong> Financial performance continues to be a
              fundamental aspect of measuring organizational success.
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
              <strong>37.</strong> Kaplan and Norton argued that all companies
              should use the same four perspectives in their Balanced Scorecard.
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
              <strong>38.</strong> The Balanced Scorecard approach is most
              effective when an organization has a formal strategy-making
              process.
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
              <strong>39.</strong> Having too many measures in a Balanced
              Scorecard can cause practical difficulties.
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
              <strong>40.</strong> The majority of organizations now link their
              budgets to their strategic objectives.
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
  );
};

export default Cambridge16ARTest3Questions;
