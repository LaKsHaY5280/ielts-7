// Cambridge 15 General Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 15 General Reading Test 2
 */
export const Cambridge15GRTest2Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

      {/* Questions 1-6 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-6</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in the
          text?
        </p>
        <p className="mb-2">In boxes 1-6 on your answer sheet, write</p>
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
              <strong>1.</strong> There is an extra charge for locks and keys.
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
              <strong>2.</strong> It is possible to arrange to share a storage
              unit with someone else.
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
              <strong>3.</strong> You can pick up your property from the storage
              unit during the night-time.
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
              <strong>4.</strong> You can drive your vehicle right next to your
              storage unit.
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
              <strong>5.</strong> Students' possessions can only be stored
              during vacation periods.
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
              <strong>6.</strong> The storage company will collect and deliver
              students' property.
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
        </div>
      </div>

      {/* Questions 7-14 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 7-14</h3>
        <p className="mb-2">
          Look at the five descriptions of museum, <strong>A-E</strong>, in one
          area of England.
        </p>
        <p className="mb-2">
          For which museum are the following statements true?
        </p>
        <p className="mb-2">
          Write the correct letter, <strong>A-E</strong>, in boxes 7-14 on your
          answer sheet.
        </p>
        <p className="mb-4">
          <strong>NB</strong> You may use any letter more than once.
        </p>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-3">
              <strong>7.</strong> There are exhibits related to the history of
              agriculture in the region.
            </p>
            <RadioGroup name="question7" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q7-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q7-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q7-${letter.toLowerCase()}`}
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
              <strong>8.</strong> Equipment for putting out fires used to be
              kept in this building.
            </p>
            <RadioGroup name="question8" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q8-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q8-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q8-${letter.toLowerCase()}`}
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
              <strong>9.</strong> You can find information on the rise of one
              type of transport.
            </p>
            <RadioGroup name="question9" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
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
            <p className="mb-3">
              <strong>10.</strong> There are things to see both inside and
              outside.
            </p>
            <RadioGroup name="question10" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
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
            <p className="mb-3">
              <strong>11.</strong> It is possible to obtain copies of old
              pictures and documents.
            </p>
            <RadioGroup name="question11" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
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
            <p className="mb-3">
              <strong>12.</strong> On certain days you can see an original work
              by a writer of fiction.
            </p>
            <RadioGroup name="question12" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
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
            <p className="mb-3">
              <strong>13.</strong> Someone who was interested in environmental
              matters lived here for a time.
            </p>
            <RadioGroup name="question13" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
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

          <div className="question-item">
            <p className="mb-3">
              <strong>14.</strong> This museum has an exhibit related to a
              heroic achievement.
            </p>
            <RadioGroup name="question14" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E"].map((letter) => (
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
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">SECTION 2: Questions 15-27</h2>

      {/* Questions 15-20 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 15-20</h3>
        <p className="mb-2">Complete the table below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 15-20 on your answer sheet.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">Type of danger</th>
                <th className="border border-gray-300 p-2">Examples</th>
                <th className="border border-gray-300 p-2">Risks involved</th>
                <th className="border border-gray-300 p-2">Necessary action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Biohazard</td>
                <td className="border border-gray-300 p-2">
                  <strong>15.</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" />,
                  mould, bacteria, algae
                </td>
                <td className="border border-gray-300 p-2">
                  can lead to disease and death
                </td>
                <td className="border border-gray-300 p-2">
                  use protective clothing and equipment
                </td>
              </tr>
              <tr>
                <td rowSpan={3} className="border border-gray-300 p-2">
                  Confined spaces
                </td>
                <td className="border border-gray-300 p-2">
                  Contaminants e.g. gases, vapours and dusts
                </td>
                <td className="border border-gray-300 p-2">
                  injury from fire or explosion
                </td>
                <td className="border border-gray-300 p-2">
                  follow Safe Work code of practice
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  high concentrations of harmful airborne contaminants e.g.
                  carbon monoxide
                </td>
                <td className="border border-gray-300 p-2">
                  <strong>16.</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" />
                </td>
                <td className="border border-gray-300 p-2">
                  follow Safe Work code of practice
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">water</td>
                <td className="border border-gray-300 p-2">
                  <strong>17.</strong>{" "}
                  <Input type="text" className="w-32 mx-1 inline-block" />
                </td>
                <td className="border border-gray-300 p-2">
                  cut off water sources
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Electricity</td>
                <td className="border border-gray-300 p-2">
                  metal pipes which are conductive
                </td>
                <td className="border border-gray-300 p-2">
                  death from electrocution
                </td>
                <td className="border border-gray-300 p-2">
                  <div>
                    – use insulated <strong>18.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" /> and
                    appropriate equipment
                  </div>
                  <div>
                    – ensure equipment has <strong>19.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" /> on
                    to show it is safe
                  </div>
                  <div>
                    – make sure electricity has been <strong>20.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Questions 21-27 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 21-27</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 21-27 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-2">Flexible working</h4>

          <h5 className="font-medium mt-4 mb-2">
            How to organise flexible working
          </h5>
          <p className="mb-1">– trust your employees</p>
          <p className="mb-1">
            – provide them with clear <strong>21.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
          <p className="mb-1">
            – base measurements of performance on their output
          </p>
          <p className="mb-1">
            – initially, have a <strong>22.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> of progress
            each day
          </p>
          <p className="mb-1">
            – make sure a <strong>23.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> is
            accessible to give details of colleague locations
          </p>
          <p className="mb-1">
            – use a program such as iMeet to encourage different types of{" "}
            <strong>24.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> between
            workers
          </p>

          <h5 className="font-medium mt-4 mb-2">Benefits of flexibility</h5>
          <p className="mb-1">– greater productivity</p>
          <p className="mb-1">
            – less <strong>25.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> from
            colleagues
          </p>
          <p className="mb-1">
            – increase in <strong>26.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
          <p className="mb-1">– more motivated staff</p>
          <p className="mb-1">
            – greater success for the company with staff recruitment and{" "}
            <strong>27.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />
          </p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">SECTION 3: Questions 28-40</h2>

      {/* Questions 28-33 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 28-33</h3>
        <p className="mb-2">
          The text has six sections, <strong>A-F</strong>.
        </p>
        <p className="mb-2">
          Choose the correct heading for each section from the list of headings
          below.
        </p>
        <p className="mb-4">
          Write the correct number, <strong>i-vii</strong>, in boxes 28-33 on
          your answer sheet.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Headings</strong>
          </p>
          <p className="mb-1">
            <strong>i</strong> Developing an item that appears true to life
          </p>
          <p className="mb-1">
            <strong>ii</strong> Extending the project to other endangered
            species
          </p>
          <p className="mb-1">
            <strong>iii</strong> A short but intensive investigation with
            longer-term follow-up
          </p>
          <p className="mb-1">
            <strong>iv</strong> Problems facing sea turtles at a global level
          </p>
          <p className="mb-1">
            <strong>v</strong> Collection of eggs and their possible onward
            routes
          </p>
          <p className="mb-1">
            <strong>vi</strong> Intensive and large-scale poaching in one
            location
          </p>
          <p className="mb-1">
            <strong>vii</strong> Why catching the poachers may not solve the
            problem
          </p>
        </div>

        <div className="space-y-4">
          {[28, 29, 30, 31, 32, 33].map((num, idx) => (
            <div className="question-item" key={`section-heading-${num}`}>
              <p className="mb-2">
                <strong>{num}.</strong> Section {String.fromCharCode(65 + idx)}
              </p>
              <RadioGroup
                name={`question${num}`}
                className="flex flex-wrap gap-4"
              >
                {["i", "ii", "iii", "iv", "v", "vi", "vii"].map((option) => (
                  <div className="flex items-center" key={`q${num}-${option}`}>
                    <RadioGroupItem id={`q${num}-${option}`} value={option} />
                    <Label htmlFor={`q${num}-${option}`} className="ml-2">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
      </div>

      {/* Questions 34-37 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 34-37</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 34-37 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>34.</strong> What does the writer suggest about the
              flatback turtle?
            </p>
            <RadioGroup name="question34" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q34-a" value="A" />
                <Label htmlFor="q34-a" className="ml-2">
                  A It could be as severely threatened as other turtles.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-b" value="B" />
                <Label htmlFor="q34-b" className="ml-2">
                  B It has been neglected by scientists in the past.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-c" value="C" />
                <Label htmlFor="q34-c" className="ml-2">
                  C It is in less danger than some other species.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-d" value="D" />
                <Label htmlFor="q34-d" className="ml-2">
                  D It should be removed from the IUCN Red List.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>35.</strong> Williams-Guillen says that the poaching of
              sea turtle eggs in Nicaragua
            </p>
            <RadioGroup name="question35" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q35-a" value="A" />
                <Label htmlFor="q35-a" className="ml-2">
                  A is mainly carried out by local people.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q35-b" value="B" />
                <Label htmlFor="q35-b" className="ml-2">
                  B may be encouraged by the presence of tourists.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q35-c" value="C" />
                <Label htmlFor="q35-c" className="ml-2">
                  C sometimes has a highly organised structure.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q35-d" value="D" />
                <Label htmlFor="q35-d" className="ml-2">
                  D can only be controlled by the use of armed guards.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>36.</strong> In Section E, Williams-Guillen says that one
              way to encourage poachers to take the fake eggs is to
            </p>
            <RadioGroup name="question36" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q36-a" value="A" />
                <Label htmlFor="q36-a" className="ml-2">
                  A make fake nests and put the eggs into them.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q36-b" value="B" />
                <Label htmlFor="q36-b" className="ml-2">
                  B put them in nests with just a few real eggs.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q36-c" value="C" />
                <Label htmlFor="q36-c" className="ml-2">
                  C distract the poachers after the fake eggs have been put in
                  the nests.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q36-d" value="D" />
                <Label htmlFor="q36-d" className="ml-2">
                  D put them in nests that the poachers have started to dig up.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>37.</strong> It is planned to use a large number of fake
              eggs at the beginning because
            </p>
            <RadioGroup name="question37" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q37-a" value="A" />
                <Label htmlFor="q37-a" className="ml-2">
                  A researchers don't know which nests will be targeted by
                  poachers.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q37-b" value="B" />
                <Label htmlFor="q37-b" className="ml-2">
                  B poachers will probably become aware of the scheme quite
                  quickly.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q37-c" value="C" />
                <Label htmlFor="q37-c" className="ml-2">
                  C conservationists still need to perfect the design of the
                  fake eggs.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q37-d" value="D" />
                <Label htmlFor="q37-d" className="ml-2">
                  D customers won't be able to tell which eggs are fake.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 38-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 38-40</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 38-40 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">Making convincing sea turtle eggs</h4>
          <p className="mb-2">
            One difficulty in creating a fake sea turtle egg is to get the
            appropriate texture for the shell. Unlike a bird's egg, a turtle's
            egg has a shell which is <strong>38.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. Lauren
            Wilde has studied eggs from Californian turtles that live on{" "}
            <strong>39.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> to create a
            realistic reproduction of the shell. A GPS device will then be
            placed inside a <strong>40.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> in the fake
            shell. Finally, silicone will be applied to the shell to make it
            waterproof.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cambridge15GRTest2Questions;
