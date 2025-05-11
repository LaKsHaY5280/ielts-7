// Cambridge 15 General Reading Test 3 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 15 General Reading Test 3
 */
export const Cambridge15GRTest3Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

      {/* Questions 1-7 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-7</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in the
          text?
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
              <strong>1.</strong> Participants are required to create a new item
              of clothing for the Young Fashion Designer UK competition.
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
              <strong>2.</strong> Participants must send information about the
              thoughts that led to the item they are entering for the
              competition.
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
              <strong>3.</strong> The shortlist will consist of a fixed number
              of finalists.
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
              <strong>4.</strong> Finalists can choose how to present their work
              to the judges on their stand.
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
              <strong>5.</strong> It is strongly recommended that finalists
              support their entry with additional photographs.
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
              <strong>6.</strong> Questions that the students ask the judges may
              count towards the final decisions.
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
              <strong>7.</strong> Extra prizes may be awarded depending on the
              standard of the entries submitted.
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

      {/* Questions 8-14 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 8-14</h3>
        <p className="mb-2">
          Look at the six reviews of computer keyboards, <strong>A-F</strong>.
        </p>
        <p className="mb-2">
          For which keyboard are the following statements true?
        </p>
        <p className="mb-2">
          Write the correct letter, <strong>A-F</strong>, in boxes 8-14 on your
          answer sheet.
        </p>
        <p className="mb-4">
          <strong>NB</strong> You may use any letter more than once.
        </p>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>8.</strong> This keyboard may not suit users who prefer
              the keys to be almost silent.
            </p>
            <RadioGroup name="question8" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
            <p className="mb-2">
              <strong>9.</strong> This keyboard is easily portable because it
              can be made to fit into a small space.
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
              <strong>10.</strong> This keyboard includes a special place to put
              small devices.
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
              <strong>11.</strong> This keyboard is designed to prevent injury
              to those who spend a lot of time on the computer.
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
              <strong>12.</strong> This keyboard offers good value for money.
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
              <strong>13.</strong> This keyboard is primarily aimed at people
              who use their computer for entertainment.
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

          <div className="question-item">
            <p className="mb-2">
              <strong>14.</strong> It shouldn't take long for users to get used
              to the shape of the keys on this keyboard.
            </p>
            <RadioGroup name="question14" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
        <p className="mb-2">Complete the sentences below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 15-20 on your answer sheet.
        </p>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>15.</strong> In a small business it is easy to become{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> with
              colleagues and other departments.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>16.</strong> You may find you have{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> you were
              not aware of.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>17.</strong> Finding that your work is{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> will make
              you enjoy doing it.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>18.</strong> Other people are likely to realise that you
              have <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>19.</strong> Opportunities for{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> will come
              sooner than in a larger business.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-2">
              <strong>20.</strong> You can benefit from a small company being
              more <Input type="text" className="w-32 mx-1 inline-block" /> than
              a large one.
            </p>
          </div>
        </div>
      </div>

      {/* Questions 21-27 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 21-27</h3>
        <p className="mb-2">
          The text has seven paragraphs, <strong>A-G</strong>.
        </p>
        <p className="mb-2">Which paragraph mentions the following?</p>
        <p className="mb-4">
          Write the correct letter, <strong>A-G</strong>, in boxes 21-27 on your
          answer sheet.
        </p>
        <p className="mb-2">
          <strong>NB</strong> You may use any letter more than once.
        </p>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>21.</strong> the emotions that new employees are likely to
              experience at first
            </p>
            <RadioGroup name="question21" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
              <strong>22.</strong> a warning to be patient at first
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
            <p className="mb-2">
              <strong>23.</strong> how colleagues might react to certain
              behaviour
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
            <p className="mb-2">
              <strong>24.</strong> travelling to your new workplace before you
              start working there
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
            <p className="mb-2">
              <strong>25.</strong> an example of observing an activity carried
              out within an organisation
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
            <p className="mb-2">
              <strong>26.</strong> some things that the organisation should
              arrange for when you begin
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

          <div className="question-item">
            <p className="mb-2">
              <strong>27.</strong> a division of jobs within an organisation
              into two categories
            </p>
            <RadioGroup name="question27" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q27-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q27-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q27-${letter.toLowerCase()}`}
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

      <h2 className="text-lg font-bold mb-4">SECTION 3: Questions 28-40</h2>

      {/* Questions 28-30 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 28-30</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 28-30 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>28.</strong> The writer discusses marathon runners and
              barnacle geese to introduce the idea that
            </p>
            <RadioGroup name="question28" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q28-a" value="A" />
                <Label htmlFor="q28-a" className="ml-2">
                  A marathon runners may be using inefficient training methods.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-b" value="B" />
                <Label htmlFor="q28-b" className="ml-2">
                  B the role of diet in achieving fitness has been
                  underestimated.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-c" value="C" />
                <Label htmlFor="q28-c" className="ml-2">
                  C barnacle geese spend much longer preparing to face a
                  challenge.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-d" value="D" />
                <Label htmlFor="q28-d" className="ml-2">
                  D serious training is not always necessary for physical
                  achievement.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>29.</strong> The writer says that human muscles
            </p>
            <RadioGroup name="question29" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q29-a" value="A" />
                <Label htmlFor="q29-a" className="ml-2">
                  A use up a lot of energy even when resting.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-b" value="B" />
                <Label htmlFor="q29-b" className="ml-2">
                  B are heavier than other types of body tissue.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-c" value="C" />
                <Label htmlFor="q29-c" className="ml-2">
                  C were more efficiently used by our ancestors.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-d" value="D" />
                <Label htmlFor="q29-d" className="ml-2">
                  D have become weaker than they were in the past.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>30.</strong> The writer says that in order to survive,
              early humans developed the ability to
            </p>
            <RadioGroup name="question30" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q30-a" value="A" />
                <Label htmlFor="q30-a" className="ml-2">
                  A hide from their prey.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-b" value="B" />
                <Label htmlFor="q30-b" className="ml-2">
                  B run long distances.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-c" value="C" />
                <Label htmlFor="q30-c" className="ml-2">
                  C adapt their speeds to different situations.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-d" value="D" />
                <Label htmlFor="q30-d" className="ml-2">
                  D predict different types of animal movements.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 31-35 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 31-35</h3>
        <p className="mb-2">
          <strong>Complete the summary below.</strong>
        </p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 31-35 on your answer sheet
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">
            What is the key to physical fitness?
          </h4>
          <p className="mb-4">
            In biological terms, when an animal is physically fit, its body
            changes, becoming more powerful and <strong>31.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. For bears,
            this change may be initially caused by colder weather or a lack of{" "}
            <strong>32.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />, which
            during <strong>33.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> causes
            certain compounds to be released into their <strong>34.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and to
            travel around the body. These compounds appear to prevent muscle
            loss. In the case of barnacle geese, the change may be due to a
            variation in <strong>35.</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />.
          </p>
        </div>
      </div>

      {/* Questions 36-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 36-40</h3>
        <p className="mb-2">
          Look at the following statements (Questions 36-40) and the list of
          researchers below.
        </p>
        <p className="mb-2">
          <strong>
            Match each statement with the correct researcher, A, B, C or D.
          </strong>
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>, in boxes 36-40 on your
          answer sheet.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Researchers</strong>
          </p>
          <p className="mb-1">
            <strong>A</strong> Lewis Halsey
          </p>
          <p className="mb-1">
            <strong>B</strong> Chris Guglielmo
          </p>
          <p className="mb-1">
            <strong>C</strong> Daniel Lieberman
          </p>
          <p className="mb-1">
            <strong>D</strong> Ross Tucker
          </p>
        </div>

        <p className="mb-2">
          <strong>NB</strong> You may use any letter more than once.
        </p>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>36.</strong> One belief about how animals stay fit is
              possibly untrue.
            </p>
            <RadioGroup name="question36" className="flex gap-4">
              {["A", "B", "C", "D"].map((letter) => (
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
              <strong>37.</strong> It may not be possible to train all animals
              to improve their speed.
            </p>
            <RadioGroup name="question37" className="flex gap-4">
              {["A", "B", "C", "D"].map((letter) => (
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

          <div className="question-item">
            <p className="mb-2">
              <strong>38.</strong> One type of bird has demonstrated fitness
              when exposed to a stimulus in experimental conditions.
            </p>
            <RadioGroup name="question38" className="flex gap-4">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q38-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q38-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q38-${letter.toLowerCase()}`}
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
              <strong>39.</strong> Human energy use developed in a different way
              from that of animals.
            </p>
            <RadioGroup name="question39" className="flex gap-4">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q39-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q39-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q39-${letter.toLowerCase()}`}
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
              <strong>40.</strong> One type of bird may develop more strength
              when the weather becomes warmer or cooler.
            </p>
            <RadioGroup name="question40" className="flex gap-4">
              {["A", "B", "C", "D"].map((letter) => (
                <div
                  className="flex items-center"
                  key={`q40-${letter.toLowerCase()}`}
                >
                  <RadioGroupItem
                    id={`q40-${letter.toLowerCase()}`}
                    value={letter}
                  />
                  <Label
                    htmlFor={`q40-${letter.toLowerCase()}`}
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
    </div>
  );
};

export default Cambridge15GRTest3Questions;
