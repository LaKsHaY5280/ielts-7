// Cambridge 16 General Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 16 General Reading Test 2
 */
export const Cambridge16GRTest2Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

      {/* Questions 1-8 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-8</h3>
        <p className="mb-2">Complete the sentences below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 1-8 on your answer sheet.
        </p>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>1.</strong> Community gardens help people save money on{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>2.</strong> Some gardens donate part of what they grow to{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>3.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> Gardens
              are commonly found in residential complexes such as apartment
              buildings.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>4.</strong> Gardens at institutions like hospitals are
              sometimes used for{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> or job
              training.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>5.</strong> Before starting a community garden, it's
              important to form a{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to help
              organize the work.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>6.</strong> A good garden site needs at least six hours of{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> each day.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>7.</strong> Garden paths should be wide enough to ensure{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for all
              users.
            </p>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>8.</strong> The Phoenix Community Garden collects{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to make
              their garden more environmentally friendly.
            </p>
          </div>
        </div>
      </div>

      {/* Questions 9-14 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 9-14</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in
          Reading Passage 1?
        </p>
        <p className="mb-2">In boxes 9-14 on your answer sheet, write</p>
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
              <strong>9.</strong> Community gardens are always divided into
              individual plots.
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
              <strong>10.</strong> Neighborhood gardens are usually created on
              empty plots of land.
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
              <strong>11.</strong> Demonstration gardens are mainly used to grow
              rare plant varieties.
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
              <strong>12.</strong> Soil testing is essential before starting a
              community garden.
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
              <strong>13.</strong> The Phoenix Community Garden has improved
              property values in the neighborhood.
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

          <div className="question-item">
            <p className="mb-3">
              <strong>14.</strong> The number of community gardens worldwide is
              decreasing.
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
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4 mt-10">
        SECTION 2: Questions 15-27
      </h2>

      {/* Questions 15-19 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 15-19</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 15-19 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>15.</strong> According to the passage, executive coaching
              is now
            </p>
            <RadioGroup name="question15" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q15-a" value="A" />
                <Label htmlFor="q15-a" className="ml-2">
                  A mainly used to correct problematic behavior.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-b" value="B" />
                <Label htmlFor="q15-b" className="ml-2">
                  B increasingly recognized as a development tool.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-c" value="C" />
                <Label htmlFor="q15-c" className="ml-2">
                  C too expensive for most organizations.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q15-d" value="D" />
                <Label htmlFor="q15-d" className="ml-2">
                  D primarily used by the largest companies.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>16.</strong> How does executive coaching differ from
              traditional training?
            </p>
            <RadioGroup name="question16" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q16-a" value="A" />
                <Label htmlFor="q16-a" className="ml-2">
                  A It is usually conducted in a group setting.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-b" value="B" />
                <Label htmlFor="q16-b" className="ml-2">
                  B It focuses on theoretical knowledge rather than skills.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-c" value="C" />
                <Label htmlFor="q16-c" className="ml-2">
                  C It is customized to individual needs.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q16-d" value="D" />
                <Label htmlFor="q16-d" className="ml-2">
                  D It requires less time commitment.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>17.</strong> The coaching process typically begins with
            </p>
            <RadioGroup name="question17" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q17-a" value="A" />
                <Label htmlFor="q17-a" className="ml-2">
                  A developing specific action plans.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-b" value="B" />
                <Label htmlFor="q17-b" className="ml-2">
                  B implementing new behaviors immediately.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-c" value="C" />
                <Label htmlFor="q17-c" className="ml-2">
                  C establishing clear objectives for the engagement.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q17-d" value="D" />
                <Label htmlFor="q17-d" className="ml-2">
                  D thorough assessment of the executive's strengths and
                  challenges.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>18.</strong> According to the passage, when selecting a
              coach, what is LEAST important?
            </p>
            <RadioGroup name="question18" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q18-a" value="A" />
                <Label htmlFor="q18-a" className="ml-2">
                  A professional credentials and certification
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-b" value="B" />
                <Label htmlFor="q18-b" className="ml-2">
                  B industry-specific experience
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-c" value="C" />
                <Label htmlFor="q18-c" className="ml-2">
                  C a comfortable relationship with the executive
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q18-d" value="D" />
                <Label htmlFor="q18-d" className="ml-2">
                  D understanding of organizational dynamics
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>19.</strong> In the case study, Sarah Chen's coaching
              helped her to
            </p>
            <RadioGroup name="question19" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q19-a" value="A" />
                <Label htmlFor="q19-a" className="ml-2">
                  A improve her technical skills.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q19-b" value="B" />
                <Label htmlFor="q19-b" className="ml-2">
                  B become more effective in communicating with diverse teams.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q19-c" value="C" />
                <Label htmlFor="q19-c" className="ml-2">
                  C focus more time on product development.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q19-d" value="D" />
                <Label htmlFor="q19-d" className="ml-2">
                  D be less demanding with her team.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 20-23 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 20-23</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 20-23 on your answer sheet.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-3">
            Maximizing the Benefits of Executive Coaching
          </h4>
          <p className="mb-4">
            To get the most value from executive coaching, organizations should
            first define what <strong>20</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> means for
            the coaching relationship. The coaching goals need to be connected
            to broader <strong>21</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />.
          </p>
          <p className="mb-4">
            While maintaining confidentiality, it's valuable to have the
            executive's <strong>22</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> participate
            in goal setting and progress reviews. Organizations must also ensure
            executives have opportunities to practice their new{" "}
            <strong>23</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> in real
            workplace situations.
          </p>
        </div>
      </div>

      {/* Questions 24-27 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 24-27</h3>
        <p className="mb-2">
          Complete each sentence with the correct ending, <strong>A-F</strong>,
          below.
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A-F</strong>, in boxes 24-27 on your
          answer sheet.
        </p>

        <div className="mb-4 pl-5">
          <p className="mb-1">
            <strong>List of Endings</strong>
          </p>
          <p className="mb-1">
            <strong>A</strong> are often conducted over a three to twelve-month
            period.
          </p>
          <p className="mb-1">
            <strong>B</strong> helps executives lead their teams through periods
            of organizational change.
          </p>
          <p className="mb-1">
            <strong>C</strong> allows executives to discuss issues they wouldn't
            share with colleagues.
          </p>
          <p className="mb-1">
            <strong>D</strong> is usually measured through specific business
            outcomes.
          </p>
          <p className="mb-1">
            <strong>E</strong> can address gaps in specific leadership
            competencies.
          </p>
          <p className="mb-1">
            <strong>F</strong> has evolved from remedial intervention to a
            development investment.
          </p>
        </div>

        <div className="space-y-4">
          <div className="question-item">
            <p className="mb-2">
              <strong>24.</strong> The confidential nature of coaching
            </p>
            <RadioGroup name="question24" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
              <strong>25.</strong> Regular coaching sessions
            </p>
            <RadioGroup name="question25" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
              <strong>26.</strong> Leadership development coaching
            </p>
            <RadioGroup name="question26" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
              <strong>27.</strong> Executive coaching
            </p>
            <RadioGroup name="question27" className="flex flex-wrap gap-4">
              {["A", "B", "C", "D", "E", "F"].map((letter) => (
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

      <h2 className="text-lg font-bold mb-4 mt-10">
        SECTION 3: Questions 28-40
      </h2>

      {/* Questions 28-35 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 28-35</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 28-35 on your answer sheet.
        </p>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-bold mb-3">The Beaver: Nature's Engineer</h4>

          <p className="font-semibold mb-1">Physical Characteristics:</p>
          <ul className="list-disc ml-8 mb-3">
            <li>Second largest rodent (after capybaras)</li>
            <li>
              Features include webbed feet, large teeth, and <strong>28</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> that work
              like goggles
            </li>
            <li>
              Their tail functions as a rudder, prop for balance,{" "}
              <strong>29</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> reserve,
              and warning device
            </li>
          </ul>

          <p className="font-semibold mb-1">Building Behavior:</p>
          <ul className="list-disc ml-8 mb-3">
            <li>Build dams to create ponds for protection and food access</li>
            <li>
              Construct dome-shaped <strong>30</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> with
              underwater entrances
            </li>
            <li>
              Dig canals for transporting materials with less{" "}
              <strong>31</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </li>
          </ul>

          <p className="font-semibold mb-1">Ecological Benefits:</p>
          <ul className="list-disc ml-8 mb-3">
            <li>
              Create wetlands supporting increased <strong>32</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </li>
            <li>
              Improve water quality by trapping sediment and filtering{" "}
              <strong>33</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </li>
            <li>
              Their ponds provide crucial winter habitat for <strong>34</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in cold
              regions
            </li>
            <li>
              Act as natural <strong>35</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> during
              forest fires
            </li>
          </ul>
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
              <strong>36.</strong> North American and Eurasian beavers look
              similar despite evolving separately.
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
              <strong>37.</strong> Beaver lodges provide complete protection
              from all predators.
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
              <strong>38.</strong> Beaver populations are now larger than they
              were before European colonization.
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
              <strong>39.</strong> Beaver reintroduction projects in the UK have
              been more successful than those in the US.
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
              <strong>40.</strong> Managing beaver activity is becoming more
              common than removing them completely.
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

export default Cambridge16GRTest2Questions;
