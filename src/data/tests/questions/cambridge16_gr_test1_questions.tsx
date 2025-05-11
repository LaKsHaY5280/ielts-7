// Cambridge 16 General Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 16 General Reading Test 1
 */
export const Cambridge16GRTest1Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

      {/* Questions 1-7 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-7</h3>
        <p className="mb-2">
          Look at the information about university clubs and societies below.
        </p>
        <p className="mb-2">
          For which club or society are the following statements true?
        </p>
        <p className="mb-2">
          Write the correct letter, <strong>A-J</strong>, in boxes 1-7 on your
          answer sheet.
        </p>
        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>A</strong> Chemistry Society
          </p>
          <p className="mb-1">
            <strong>B</strong> Law Society
          </p>
          <p className="mb-1">
            <strong>C</strong> Rowing Club
          </p>
          <p className="mb-1">
            <strong>D</strong> Basketball Club
          </p>
          <p className="mb-1">
            <strong>E</strong> Drama Society
          </p>
          <p className="mb-1">
            <strong>F</strong> Photography Club
          </p>
          <p className="mb-1">
            <strong>G</strong> International Students Association
          </p>
          <p className="mb-1">
            <strong>H</strong> Chinese Cultural Society
          </p>
          <p className="mb-1">
            <strong>I</strong> Environmental Action Group
          </p>
          <p className="mb-1">
            <strong>J</strong> Charity Fundraising Society
          </p>
        </div>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>1.</strong> This club is currently working on a project to
              create a garden.
            </p>
            <RadioGroup name="question1" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                (letter) => (
                  <div
                    className="flex items-center"
                    key={`q1-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q1-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q1-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>2.</strong> This club has training sessions that begin
              very early in the day.
            </p>
            <RadioGroup name="question2" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                (letter) => (
                  <div
                    className="flex items-center"
                    key={`q2-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q2-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q2-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>3.</strong> This society offers help to students when they
              first arrive at the university.
            </p>
            <RadioGroup name="question3" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                (letter) => (
                  <div
                    className="flex items-center"
                    key={`q3-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q3-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q3-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>4.</strong> This society organizes an event where members
              showcase their work.
            </p>
            <RadioGroup name="question4" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                (letter) => (
                  <div
                    className="flex items-center"
                    key={`q4-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q4-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q4-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>5.</strong> This club organizes a formal event to raise
              money.
            </p>
            <RadioGroup name="question5" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                (letter) => (
                  <div
                    className="flex items-center"
                    key={`q5-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q5-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q5-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>6.</strong> This society arranges opportunities for
              students to get work experience.
            </p>
            <RadioGroup name="question6" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                (letter) => (
                  <div
                    className="flex items-center"
                    key={`q6-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q6-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q6-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                )
              )}
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>7.</strong> This society requires members to bring their
              own equipment.
            </p>
            <RadioGroup name="question7" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                (letter) => (
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
                )
              )}
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 8-14 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 8-14</h3>
        <p className="mb-2">Complete the sentences below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 8-14 on your answer sheet.
        </p>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>8.</strong> The Chemistry Society has social events that
              include pizza nights and{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>9.</strong> Students interested in acting can attend
              workshops on Sundays at the{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>10.</strong> The International Students Association's
              major annual event is called the{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>11.</strong> The Environmental Action Group is currently
              running a campaign for a{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>12.</strong> At the beginning of semester, students can
              sign up for clubs and societies at the{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>13.</strong> Students wanting to start a club need to find
              at least <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              who want to join.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>14.</strong> New clubs can apply for funding of up to{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> per year.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4 mt-10">
        SECTION 2: Questions 15-27
      </h2>

      {/* Questions 15-21 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 15-21</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in
          Reading Passage 2?
        </p>
        <p className="mb-2">In boxes 15-21 on your answer sheet, write</p>
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
              <strong>15.</strong> Hydroponics is a completely new method of
              growing plants.
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
              <strong>16.</strong> Hydroponics was used to grow food for
              soldiers during World War II.
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
              <strong>17.</strong> Commercial hydroponic farms are only possible
              in large facilities.
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
              <strong>18.</strong> In the Wick System, plants grow directly in
              the nutrient solution.
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
              <strong>19.</strong> Hydroponic systems use significantly less
              water than traditional farming.
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
              <strong>20.</strong> Hydroponic plants are more nutritious than
              soil-grown plants.
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

          <div className="question-item">
            <p className="mb-3">
              <strong>21.</strong> The cost of setting up hydroponic systems is
              becoming more affordable.
            </p>
            <RadioGroup name="question21" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q21-true" value="TRUE" />
                <Label htmlFor="q21-true" className="ml-2">
                  TRUE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q21-false" value="FALSE" />
                <Label htmlFor="q21-false" className="ml-2">
                  FALSE
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q21-ng" value="NOT GIVEN" />
                <Label htmlFor="q21-ng" className="ml-2">
                  NOT GIVEN
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 22-27 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 22-27</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 22-27 on your answer sheet.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-3">Advantages of Hydroponic Growing</h4>
          <p className="mb-4">
            Hydroponic systems are particularly beneficial in regions where{" "}
            <strong>22</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> is scarce
            because they recirculate water rather than letting it drain away.
            They also make efficient use of <strong>23</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> since
            plants can be grown closer together than in soil. This is because
            the plant <strong>24</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> don't need
            to spread out searching for nutrients.
          </p>

          <p className="mb-4">
            Another advantage is the precise control over <strong>25</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />, which are
            delivered directly to the plants in exact amounts. Additionally,
            hydroponics eliminates the need for <strong>26</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> and
            herbicides, as there are fewer pests and no weeds to compete with
            the crops.
          </p>

          <p className="mb-4">
            In the future, hydroponics may play an increasingly important role
            in food production as the world's population grows and{" "}
            <strong>27</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> becomes
            more limited.
          </p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4 mt-10">
        SECTION 3: Questions 28-40
      </h2>

      {/* Questions 28-34 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 28-34</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 28-34 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>28.</strong> According to the text, David Maister's main
              finding was that
            </p>
            <RadioGroup name="question28" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q28-a" value="A" />
                <Label htmlFor="q28-a" className="ml-2">
                  A people should be told exactly how long they will wait in a
                  queue.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-b" value="B" />
                <Label htmlFor="q28-b" className="ml-2">
                  B businesses should focus on reducing actual waiting times.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-c" value="C" />
                <Label htmlFor="q28-c" className="ml-2">
                  C how a wait feels is more important than its actual duration.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-d" value="D" />
                <Label htmlFor="q28-d" className="ml-2">
                  D customers are less patient now than they were in the past.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>29.</strong> The example of mirrors near elevators
              illustrates that
            </p>
            <RadioGroup name="question29" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q29-a" value="A" />
                <Label htmlFor="q29-a" className="ml-2">
                  A people enjoy looking at themselves.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-b" value="B" />
                <Label htmlFor="q29-b" className="ml-2">
                  B distractions can make waiting seem shorter.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-c" value="C" />
                <Label htmlFor="q29-c" className="ml-2">
                  C elevators are often too slow.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-d" value="D" />
                <Label htmlFor="q29-d" className="ml-2">
                  D multiple diversions should be provided.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>30.</strong> Why do some restaurants overestimate waiting
              times?
            </p>
            <RadioGroup name="question30" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q30-a" value="A" />
                <Label htmlFor="q30-a" className="ml-2">
                  A To discourage customers from leaving
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-b" value="B" />
                <Label htmlFor="q30-b" className="ml-2">
                  B To reduce customer anxiety
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-c" value="C" />
                <Label htmlFor="q30-c" className="ml-2">
                  C To create a pleasant surprise
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-d" value="D" />
                <Label htmlFor="q30-d" className="ml-2">
                  D To manage staff workload
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>31.</strong> According to the passage, what happens when
              people perceive queue management as unfair?
            </p>
            <RadioGroup name="question31" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q31-a" value="A" />
                <Label htmlFor="q31-a" className="ml-2">
                  A They may become aggressive
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-b" value="B" />
                <Label htmlFor="q31-b" className="ml-2">
                  B They tend to leave the queue
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-c" value="C" />
                <Label htmlFor="q31-c" className="ml-2">
                  C They complain to management
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-d" value="D" />
                <Label htmlFor="q31-d" className="ml-2">
                  D They avoid returning in future
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>32.</strong> Why might a restaurant want people to wait
              outside where they can be seen?
            </p>
            <RadioGroup name="question32" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q32-a" value="A" />
                <Label htmlFor="q32-a" className="ml-2">
                  A To prevent people from leaving without paying
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-b" value="B" />
                <Label htmlFor="q32-b" className="ml-2">
                  B To make their establishment look busy and successful
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-c" value="C" />
                <Label htmlFor="q32-c" className="ml-2">
                  C To encourage customers to make reservations next time
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-d" value="D" />
                <Label htmlFor="q32-d" className="ml-2">
                  D To keep the indoor space free for paying customers
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>33.</strong> According to the "peak-end rule," customers
              remember a waiting experience based primarily on
            </p>
            <RadioGroup name="question33" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q33-a" value="A" />
                <Label htmlFor="q33-a" className="ml-2">
                  A its total duration and intensity
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-b" value="B" />
                <Label htmlFor="q33-b" className="ml-2">
                  B how it began and how it ended
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-c" value="C" />
                <Label htmlFor="q33-c" className="ml-2">
                  C the most intense moment and how it ended
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-d" value="D" />
                <Label htmlFor="q33-d" className="ml-2">
                  D their expectation versus the actual experience
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>34.</strong> According to the passage, what challenge is
              created by virtual queuing systems?
            </p>
            <RadioGroup name="question34" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q34-a" value="A" />
                <Label htmlFor="q34-a" className="ml-2">
                  A They remove the social aspect of waiting in line
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-b" value="B" />
                <Label htmlFor="q34-b" className="ml-2">
                  B Not everyone has equal access to the technology
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-c" value="C" />
                <Label htmlFor="q34-c" className="ml-2">
                  C They create a false perception of waiting time
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-d" value="D" />
                <Label htmlFor="q34-d" className="ml-2">
                  D They're more expensive for businesses to implement
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 35-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 35-40</h3>
        <p className="mb-2">Complete the sentences below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the passage for each
          answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 35-40 on your answer sheet.
        </p>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>35.</strong> Disney theme parks make waiting time more
              pleasant by integrating queue areas into the{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              experience.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>36.</strong> A system with one line feeding multiple
              service points eliminates customers'{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> about
              choosing the wrong line.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>37.</strong> People may decide not to join a queue, or may
              leave after joining, if it appears too{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>38.</strong> Wait times that are of uncertain{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> cause
              more stress than those with a known endpoint.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>39.</strong> A long wait might be remembered positively if
              it ends with a sincere{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for the
              delay.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>40.</strong> The COVID-19 pandemic created new
              requirements for{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              distancing in queues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cambridge16GRTest1Questions;
