// Cambridge 16 Academic Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 16 Academic Reading Test 2
 */
export const Cambridge16ARTest2Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 1: Questions 1-13
      </h2>

      {/* Questions 1-6 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-6</h3>
        <p className="mb-2">Complete the table below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 1-6 on your answer sheet.
        </p>

        <div className="mb-6">
          <table className="border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">
                  The White Horse at Uffington
                </th>
                <th className="border border-gray-300 p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">
                  Date first documented
                </td>
                <td className="border border-gray-300 p-2">
                  <strong>1</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Dating method</td>
                <td className="border border-gray-300 p-2">
                  <strong>2</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" />
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Date of construction
                </td>
                <td className="border border-gray-300 p-2">
                  between 1400 and 600 BCE (Late <strong>3</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" />)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Maintenance process
                </td>
                <td className="border border-gray-300 p-2">
                  <strong>4</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" /> of
                  turf and chalk
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Entertainment during maintenance
                </td>
                <td className="border border-gray-300 p-2">
                  e.g., <strong>5</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" /> and
                  wrestling
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  Amount of chalk used in 2000
                </td>
                <td className="border border-gray-300 p-2">
                  <strong>6</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Questions 7-13 */}
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
            <strong>FALSE</strong> if the statement contradicts the information
          </p>
          <p className="mb-1">
            <strong>NOT GIVEN</strong> if there is no information on this
          </p>
        </div>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>7.</strong> During World War II, the White Horse was
              covered with grass for military reasons.
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
              <strong>8.</strong> Using concrete to preserve the Westbury White
              Horse proved unsuccessful.
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
              <strong>9.</strong> It is possible that some hill figures are not
              as old as they appear to be.
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
              <strong>10.</strong> The kiwi geoglyph at Bulford was created
              without permission.
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
              <strong>11.</strong> The kiwi geoglyph was created to mark a
              historical occasion.
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
              <strong>12.</strong> Most experts now agree that the Uffington
              figure represents a horse.
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
              <strong>13.</strong> The best view of the Uffington Horse is from
              an aircraft.
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

      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 2: Questions 14-26
      </h2>

      {/* Questions 14-19 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 14-19</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the passage for each
          answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 14-19 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">SILBO GOMERO</h4>
          <p className="mb-2">
            • A whistled 'language' that can be heard up to 8{" "}
            <strong>14</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> away
          </p>
          <p className="mb-2">
            • First used by the Guanches, who were related to North African{" "}
            <strong>15</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
          <p className="mb-2">
            • Adapted to the Spanish language after the conquest
          </p>
          <p className="mb-2">• Almost died out because of:</p>
          <p className="mb-3 ml-5">
            - emigration to Latin America due to <strong>16</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and
            economic problems
          </p>
          <p className="mb-3 ml-5">
            - the construction of better <strong>17</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
          <p className="mb-3 ml-5">- the spread of telephones</p>
          <p className="mb-2">• Studied by Dr. Ramon Trujillo in the 1990s</p>
          <p className="mb-2">
            • Now taught in schools across the island, and the subject of annual{" "}
            <strong>18</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
          <p className="mb-2">
            • Uses two whistled vowels to represent the four vowels in Spanish
          </p>
          <p className="mb-2">
            • Context helps clarify which <strong>19</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> is intended
          </p>
        </div>
      </div>

      {/* Questions 20-23 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 20-23</h3>
        <p className="mb-2">
          Complete each sentence with the correct ending, <strong>A-F</strong>,
          below.
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A-F</strong>, in boxes 20-23 on your
          answer sheet.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Endings</strong>
          </p>
          <p className="mb-1">
            <strong>A</strong> evidence of its ancient origins.
          </p>
          <p className="mb-1">
            <strong>B</strong> modern recognition of its importance.
          </p>
          <p className="mb-1">
            <strong>C</strong> its similarity to sign language.
          </p>
          <p className="mb-1">
            <strong>D</strong> its current educational role.
          </p>
          <p className="mb-1">
            <strong>E</strong> its limited vocabulary.
          </p>
          <p className="mb-1">
            <strong>F</strong> first-time listeners' ability to understand it.
          </p>
        </div>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>20.</strong> The UNESCO listing of Silbo Gomero represents
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
              <strong>21.</strong> A key feature that distinguishes Silbo Gomero
              from other whistled languages is
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
              <strong>22.</strong> A surprising finding from Michelle Cuskley's
              research was
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

          <div className="question-item">
            <p className="mb-2">
              <strong>23.</strong> The future of Silbo Gomero may be threatened
              by
            </p>
            <RadioGroup name="question23" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
        </div>
      </div>

      {/* Questions 24-26 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 24-26</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 24-26 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>24.</strong> What does the writer highlight about Silbo
              Gomero in the first paragraph?
            </p>
            <RadioGroup name="question24" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q24-a" value="A" />
                <Label htmlFor="q24-a" className="ml-2">
                  A how long it has existed
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q24-b" value="B" />
                <Label htmlFor="q24-b" className="ml-2">
                  B its practical purpose
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q24-c" value="C" />
                <Label htmlFor="q24-c" className="ml-2">
                  C how it has changed
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q24-d" value="D" />
                <Label htmlFor="q24-d" className="ml-2">
                  D why it is valued
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>25.</strong> What is the main point the writer makes about
              Silbo Gomero in the sixth paragraph?
            </p>
            <RadioGroup name="question25" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q25-a" value="A" />
                <Label htmlFor="q25-a" className="ml-2">
                  A It has a surprisingly complex system of vowel sounds.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q25-b" value="B" />
                <Label htmlFor="q25-b" className="ml-2">
                  B It was created to solve specific communication problems.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q25-c" value="C" />
                <Label htmlFor="q25-c" className="ml-2">
                  C It overcomes a potential problem in an effective way.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q25-d" value="D" />
                <Label htmlFor="q25-d" className="ml-2">
                  D It has difficulty conveying certain common words.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>26.</strong> What does the writer conclude about whistled
              languages?
            </p>
            <RadioGroup name="question26" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q26-a" value="A" />
                <Label htmlFor="q26-a" className="ml-2">
                  A Their continued survival will depend on them being used in
                  everyday interactions.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q26-b" value="B" />
                <Label htmlFor="q26-b" className="ml-2">
                  B The example of Silbo Gomero has inspired a whistled language
                  revival elsewhere.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q26-c" value="C" />
                <Label htmlFor="q26-c" className="ml-2">
                  C They are more likely to survive in Turkish communities than
                  elsewhere.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q26-d" value="D" />
                <Label htmlFor="q26-d" className="ml-2">
                  D More research is needed to understand how they are learned
                  and used.
                </Label>
              </div>
            </RadioGroup>
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
          Do the following statements agree with the claims of the writer in
          Reading Passage 3?
        </p>
        <p className="mb-2">In boxes 27-32 on your answer sheet, write</p>
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
              <strong>27.</strong> Children's play has a larger role in brain
              development than was previously thought.
            </p>
            <RadioGroup name="question27" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q27-yes" value="YES" />
                <Label htmlFor="q27-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-no" value="NO" />
                <Label htmlFor="q27-no" className="ml-2">
                  NO
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q27-ng" value="NOT GIVEN" />
                <Label htmlFor="q27-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>28.</strong> It is now easier for children to find
              opportunities for play in towns and cities than it once was.
            </p>
            <RadioGroup name="question28" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q28-yes" value="YES" />
                <Label htmlFor="q28-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-no" value="NO" />
                <Label htmlFor="q28-no" className="ml-2">
                  NO
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-ng" value="NOT GIVEN" />
                <Label htmlFor="q28-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>29.</strong> Children need toys in order to develop their
              creativity.
            </p>
            <RadioGroup name="question29" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q29-yes" value="YES" />
                <Label htmlFor="q29-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-no" value="NO" />
                <Label htmlFor="q29-no" className="ml-2">
                  NO
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-ng" value="NOT GIVEN" />
                <Label htmlFor="q29-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>30.</strong> A lack of play facilities has influenced the
              behaviour of primary school teachers.
            </p>
            <RadioGroup name="question30" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q30-yes" value="YES" />
                <Label htmlFor="q30-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-no" value="NO" />
                <Label htmlFor="q30-no" className="ml-2">
                  NO
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-ng" value="NOT GIVEN" />
                <Label htmlFor="q30-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>31.</strong> Primary school teachers should be more
              involved in their pupils' activities.
            </p>
            <RadioGroup name="question31" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q31-yes" value="YES" />
                <Label htmlFor="q31-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-no" value="NO" />
                <Label htmlFor="q31-no" className="ml-2">
                  NO
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-ng" value="NOT GIVEN" />
                <Label htmlFor="q31-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>32.</strong> International assessment systems have helped
              improve educational standards.
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
        </div>
      </div>

      {/* Questions 33-36 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 33-36</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 33-36 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>33.</strong> What is the writer's main point about Alice's
              play in the first two paragraphs?
            </p>
            <RadioGroup name="question33" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q33-a" value="A" />
                <Label htmlFor="q33-a" className="ml-2">
                  A Different kinds of play can develop different skills.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-b" value="B" />
                <Label htmlFor="q33-b" className="ml-2">
                  B Children of different ages play in different ways.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-c" value="C" />
                <Label htmlFor="q33-c" className="ml-2">
                  C Some children are more creative than others.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-d" value="D" />
                <Label htmlFor="q33-d" className="ml-2">
                  D Children play more creatively with other children than on
                  their own.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>34.</strong> When referring to children at play,
              Whitebread argues that
            </p>
            <RadioGroup name="question34" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q34-a" value="A" />
                <Label htmlFor="q34-a" className="ml-2">
                  A schools should increase the amount of play time they
                  provide.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-b" value="B" />
                <Label htmlFor="q34-b" className="ml-2">
                  B society underestimates the connection between play and
                  learning.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-c" value="C" />
                <Label htmlFor="q34-c" className="ml-2">
                  C play is more important for some children than for others.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-d" value="D" />
                <Label htmlFor="q34-d" className="ml-2">
                  D most types of play are beneficial for children's
                  development.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>35.</strong> What point does the writer make in paragraph
              10?
            </p>
            <RadioGroup name="question35" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q35-a" value="A" />
                <Label htmlFor="q35-a" className="ml-2">
                  A It is difficult to measure the long-term benefits of play.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q35-b" value="B" />
                <Label htmlFor="q35-b" className="ml-2">
                  B The PEDAL Centre has shown how school children try to cope
                  with stress.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q35-c" value="C" />
                <Label htmlFor="q35-c" className="ml-2">
                  C Play is especially important for children in an uncertain
                  world.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q35-d" value="D" />
                <Label htmlFor="q35-d" className="ml-2">
                  D Professor Gopnik has influenced the direction of research at
                  the PEDAL Centre.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>36.</strong> According to the last paragraph, research at
              the PEDAL Centre
            </p>
            <RadioGroup name="question36" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q36-a" value="A" />
                <Label htmlFor="q36-a" className="ml-2">
                  A shows that starting school changes children's attitudes to
                  play.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q36-b" value="B" />
                <Label htmlFor="q36-b" className="ml-2">
                  B has identified differences in play at different stages of
                  development.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q36-c" value="C" />
                <Label htmlFor="q36-c" className="ml-2">
                  C focuses on the evolutionary importance of human play.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q36-d" value="D" />
                <Label htmlFor="q36-d" className="ml-2">
                  D aims to show the value of play for children's education.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 37-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 37-40</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the passage for each
          answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 37-40 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">Children's Play</h4>
          <p className="mb-4">
            The research by Dr. Emily Farran's team at the PEDAL Centre suggests
            that children's
            <strong>37</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> is
            supported by play. In one study, children were given puzzles to
            solve under two different conditions. The results showed that
            children who had played with puzzles first were less reliant on
            <strong>38</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> from
            adults. According to Whitebread, the study shows the importance of
            viewing play as a way for children to learn without being
            <strong>39</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. He
            suggests that teachers may need to adopt different
            <strong>40</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> in the
            classroom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cambridge16ARTest2Questions;
