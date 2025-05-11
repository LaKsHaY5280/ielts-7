// Cambridge 19 General Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Cambridge19GRTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">Section 1: Passage 1</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1–7</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">
            In <strong>boxes 1–7</strong> on your answer sheet, write
          </p>

          <div className="mb-6 space-y-1">
            <p>
              <strong>TRUE</strong> if the statement agrees with the information
            </p>
            <p>
              <strong>FALSE</strong> if the statement contradicts the
              information
            </p>
            <p>
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1</strong> The city buses start operating later than the
                trams.
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
                  <RadioGroupItem id="q1-ng" value="NG" />
                  <Label htmlFor="q1-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2</strong> You can get a tram from the airport to the
                city centre up to midnight.
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
                  <RadioGroupItem id="q2-ng" value="NG" />
                  <Label htmlFor="q2-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3</strong> The 207 bus service stops at the main railway
                station.
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
                  <RadioGroupItem id="q3-ng" value="NG" />
                  <Label htmlFor="q3-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>4</strong> The cost of a tram ticket varies depending on
                your journey.
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
                  <RadioGroupItem id="q4-ng" value="NG" />
                  <Label htmlFor="q4-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>5</strong> Bicycles are allowed on the trams between
                7.30 am and 10 am.
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
                  <RadioGroupItem id="q5-ng" value="NG" />
                  <Label htmlFor="q5-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>6</strong> Additional trams run during the Gobridge
                festival period.
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
                  <RadioGroupItem id="q6-ng" value="NG" />
                  <Label htmlFor="q6-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>7</strong> Cyclists may be asked to leave the tram if
                they block the exit.
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
                  <RadioGroupItem id="q7-ng" value="NG" />
                  <Label htmlFor="q7-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">Section 1: Passage 2</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8–14</h3>
          <div className="mb-4">
            <p>
              Look at the five online customer reviews of sweaters,{" "}
              <strong>A–E</strong>.
            </p>
            <p>For which review are the following statements true?</p>
            <p>
              Write the correct letter, <strong>A–E</strong>, in{" "}
              <strong>boxes 8–14</strong> on your answer sheet.
            </p>
            <p className="mt-2 italic">
              <em>NB You may use any letter more than once.</em>
            </p>
          </div>

          <div className="space-y-6 mt-4">
            <div className="question-item">
              <p className="mb-3">
                <strong>8</strong> The colour of the sweater did not match the
                website image.
              </p>
              <RadioGroup name="question8" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q8-a" value="A" />
                  <Label htmlFor="q8-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-b" value="B" />
                  <Label htmlFor="q8-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-c" value="C" />
                  <Label htmlFor="q8-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-d" value="D" />
                  <Label htmlFor="q8-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-e" value="E" />
                  <Label htmlFor="q8-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>9</strong> The customer took some time to decide on the
                purchase.
              </p>
              <RadioGroup name="question9" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q9-a" value="A" />
                  <Label htmlFor="q9-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-b" value="B" />
                  <Label htmlFor="q9-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-c" value="C" />
                  <Label htmlFor="q9-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-d" value="D" />
                  <Label htmlFor="q9-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-e" value="E" />
                  <Label htmlFor="q9-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10</strong> The customer initially bought the wrong
                size.
              </p>
              <RadioGroup name="question10" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q10-a" value="A" />
                  <Label htmlFor="q10-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-b" value="B" />
                  <Label htmlFor="q10-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-c" value="C" />
                  <Label htmlFor="q10-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-d" value="D" />
                  <Label htmlFor="q10-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-e" value="E" />
                  <Label htmlFor="q10-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11</strong> The customer changed her mind about
                returning a sweater.
              </p>
              <RadioGroup name="question11" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q11-a" value="A" />
                  <Label htmlFor="q11-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-b" value="B" />
                  <Label htmlFor="q11-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-c" value="C" />
                  <Label htmlFor="q11-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-d" value="D" />
                  <Label htmlFor="q11-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-e" value="E" />
                  <Label htmlFor="q11-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12</strong> The customer bought a bigger size than she
                usually does.
              </p>
              <RadioGroup name="question12" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q12-a" value="A" />
                  <Label htmlFor="q12-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-b" value="B" />
                  <Label htmlFor="q12-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-c" value="C" />
                  <Label htmlFor="q12-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-d" value="D" />
                  <Label htmlFor="q12-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-e" value="E" />
                  <Label htmlFor="q12-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13</strong> The sweater can be worn for smart or casual
                occasions.
              </p>
              <RadioGroup name="question13" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q13-a" value="A" />
                  <Label htmlFor="q13-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-b" value="B" />
                  <Label htmlFor="q13-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-c" value="C" />
                  <Label htmlFor="q13-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-d" value="D" />
                  <Label htmlFor="q13-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-e" value="E" />
                  <Label htmlFor="q13-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>14</strong> The customer was worried that the sweater
                wouldn't suit her.
              </p>
              <RadioGroup name="question14" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q14-a" value="A" />
                  <Label htmlFor="q14-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-b" value="B" />
                  <Label htmlFor="q14-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-c" value="C" />
                  <Label htmlFor="q14-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-d" value="D" />
                  <Label htmlFor="q14-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-e" value="E" />
                  <Label htmlFor="q14-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 2</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 15-21</h3>
          <div className="mb-4">
            <p>Complete the sentences below.</p>
            <p>
              Choose <strong>ONE WORD ONLY</strong> from the text for each
              answer.
            </p>
            <p>
              Write your answers in <strong>boxes 15-21</strong> on your answer
              sheet.
            </p>
          </div>

          <div className="space-y-4 mt-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> Initially, a leader needs to focus on
                gaining the{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> of the
                staff.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> A leader should decide on{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> that
                their staff are happy to fulfil.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> Leaders should involve their staff in the
                process of producing a different{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> If tricky issues arise, leaders should give
                staff the space to find{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> to
                them.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> Leaders need to encourage their staff to
                feel <Input type="text" className="w-32 mx-1 inline-block" /> in
                the past achievements of the company.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> It is important for leaders to agree to a
                certain degree of{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> when
                necessary.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> If leaders find the{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> of the
                company exciting, their staff will be more motivated to work
                hard.
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 22-27</h3>
          <div className="mb-4">
            <p>
              Complete the notes below. Choose <strong>ONE WORD ONLY</strong>{" "}
              from the text for each answer.
            </p>
            <p>
              Write your answers in <strong>boxes 22-27</strong> on your answer
              sheet.
            </p>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-bold mb-3">The best way to resign</h3>

            <div className="space-y-4">
              <p>
                Avoid all{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                <strong>(22)</strong> to resign in an angry way. Instead, follow
                this procedure:
              </p>

              <div className="ml-4">
                <p className="font-medium">
                  Arrange a meeting with the boss to:
                </p>
                <ul className="list-disc ml-6 space-y-2 my-2">
                  <li>
                    mention any projects which are underway and give ideas for
                    their{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                    <strong>(23)</strong>.
                  </li>
                  <li>
                    discuss how much notice you need to give before you go.
                  </li>
                  <li>
                    request information on the type of{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                    <strong>(24)</strong> you will receive.
                  </li>
                </ul>
              </div>

              <div className="ml-4">
                <p className="font-medium">
                  Steps you can take before you leave:
                </p>
                <ul className="list-disc ml-6 space-y-2 my-2">
                  <li>
                    Work to cause as little{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                    <strong>(25)</strong> as possible to the organisation.
                  </li>
                  <li>
                    Make sure your successor has adequate guidance on the
                    organisation's systems.
                  </li>
                </ul>
              </div>

              <div className="ml-4">
                <p className="font-medium">In the resignation letter:</p>
                <ul className="list-disc ml-6 space-y-2 my-2">
                  <li>
                    avoid mentioning any{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                    <strong>(26)</strong> in the organisation.
                  </li>
                  <li>
                    show appreciation for aspects of the job, e.g., the chance
                    to improve your{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                    <strong>(27)</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 3</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28-32</h3>
          <div className="mb-4">
            <p>
              The text has five sections, <strong>A-E</strong>. Choose the
              correct heading for each section from the list of headings below.
            </p>
            <p>
              Write the correct number, <strong>i-viii</strong>, in{" "}
              <strong>boxes 28-32</strong> on your answer sheet.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h4 className="font-bold mb-2">List of Headings</h4>
            <ul className="list-roman ml-6">
              <li>Why emojis may have a short life</li>
              <li>Ways in which new emojis are designed and made available</li>
              <li>How words and emojis both fulfil new needs in our society</li>
              <li>
                How emojis are regarded in different ways by different cultures
              </li>
              <li>
                The use of emojis in different fields and what this means for us
              </li>
              <li>The rapid spread of a new way of interacting</li>
              <li>How and where emojis were first invented</li>
              <li>The value of emojis for making feelings clear</li>
            </ul>
          </div>

          <div className="space-y-4 mt-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> Section A
              </p>
              <RadioGroup name="question28" className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-i" value="i" />
                  <Label htmlFor="q28-i" className="ml-2">
                    i
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-ii" value="ii" />
                  <Label htmlFor="q28-ii" className="ml-2">
                    ii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-iii" value="iii" />
                  <Label htmlFor="q28-iii" className="ml-2">
                    iii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-iv" value="iv" />
                  <Label htmlFor="q28-iv" className="ml-2">
                    iv
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-v" value="v" />
                  <Label htmlFor="q28-v" className="ml-2">
                    v
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-vi" value="vi" />
                  <Label htmlFor="q28-vi" className="ml-2">
                    vi
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-vii" value="vii" />
                  <Label htmlFor="q28-vii" className="ml-2">
                    vii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-viii" value="viii" />
                  <Label htmlFor="q28-viii" className="ml-2">
                    viii
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> Section B
              </p>
              <RadioGroup name="question29" className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-i" value="i" />
                  <Label htmlFor="q29-i" className="ml-2">
                    i
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-ii" value="ii" />
                  <Label htmlFor="q29-ii" className="ml-2">
                    ii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-iii" value="iii" />
                  <Label htmlFor="q29-iii" className="ml-2">
                    iii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-iv" value="iv" />
                  <Label htmlFor="q29-iv" className="ml-2">
                    iv
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-v" value="v" />
                  <Label htmlFor="q29-v" className="ml-2">
                    v
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-vi" value="vi" />
                  <Label htmlFor="q29-vi" className="ml-2">
                    vi
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-vii" value="vii" />
                  <Label htmlFor="q29-vii" className="ml-2">
                    vii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-viii" value="viii" />
                  <Label htmlFor="q29-viii" className="ml-2">
                    viii
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> Section C
              </p>
              <RadioGroup name="question30" className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-i" value="i" />
                  <Label htmlFor="q30-i" className="ml-2">
                    i
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-ii" value="ii" />
                  <Label htmlFor="q30-ii" className="ml-2">
                    ii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-iii" value="iii" />
                  <Label htmlFor="q30-iii" className="ml-2">
                    iii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-iv" value="iv" />
                  <Label htmlFor="q30-iv" className="ml-2">
                    iv
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-v" value="v" />
                  <Label htmlFor="q30-v" className="ml-2">
                    v
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-vi" value="vi" />
                  <Label htmlFor="q30-vi" className="ml-2">
                    vi
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-vii" value="vii" />
                  <Label htmlFor="q30-vii" className="ml-2">
                    vii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-viii" value="viii" />
                  <Label htmlFor="q30-viii" className="ml-2">
                    viii
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> Section D
              </p>
              <RadioGroup name="question31" className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-i" value="i" />
                  <Label htmlFor="q31-i" className="ml-2">
                    i
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-ii" value="ii" />
                  <Label htmlFor="q31-ii" className="ml-2">
                    ii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-iii" value="iii" />
                  <Label htmlFor="q31-iii" className="ml-2">
                    iii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-iv" value="iv" />
                  <Label htmlFor="q31-iv" className="ml-2">
                    iv
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-v" value="v" />
                  <Label htmlFor="q31-v" className="ml-2">
                    v
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-vi" value="vi" />
                  <Label htmlFor="q31-vi" className="ml-2">
                    vi
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-vii" value="vii" />
                  <Label htmlFor="q31-vii" className="ml-2">
                    vii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-viii" value="viii" />
                  <Label htmlFor="q31-viii" className="ml-2">
                    viii
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>32</strong> Section E
              </p>
              <RadioGroup name="question32" className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-i" value="i" />
                  <Label htmlFor="q32-i" className="ml-2">
                    i
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-ii" value="ii" />
                  <Label htmlFor="q32-ii" className="ml-2">
                    ii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-iii" value="iii" />
                  <Label htmlFor="q32-iii" className="ml-2">
                    iii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-iv" value="iv" />
                  <Label htmlFor="q32-iv" className="ml-2">
                    iv
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-v" value="v" />
                  <Label htmlFor="q32-v" className="ml-2">
                    v
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-vi" value="vi" />
                  <Label htmlFor="q32-vi" className="ml-2">
                    vi
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-vii" value="vii" />
                  <Label htmlFor="q32-vii" className="ml-2">
                    vii
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-viii" value="viii" />
                  <Label htmlFor="q32-viii" className="ml-2">
                    viii
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 33-37</h3>
          <div className="mb-4">
            <p>
              Complete the summary below. Choose <strong>ONE WORD ONLY</strong>{" "}
              from the text for each answer.
            </p>
            <p>
              Write your answers in <strong>boxes 33-37</strong> on your answer
              sheet.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h4 className="font-bold mb-2">
              The importance of the 'face with tears of joy'
            </h4>
            <p className="mb-4">
              It is probable that before long, an emoji such as the 'face with
              tears of joy' will seem{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              <strong>(33)</strong>. This is of interest as it tells us about
              developments in{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              <strong>(34)</strong>, providing an effective way to focus on both
              the <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              <strong>(35)</strong> and the future of human communication.
              Changes in language reflect changes in people's relationships.
              They reflect the ways in which the{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              <strong>(36)</strong> of groups and generations changes over time,
              and they allow new{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              <strong>(37)</strong> to be included. However, emojis are
              interesting as they are a system that expresses these ideas in a
              completely new way.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 38-40</h3>
          <div className="mb-4">
            <p>
              Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
              <strong>C</strong> or <strong>D</strong>.
            </p>
            <p>
              Write the correct letter in <strong>boxes 38-40</strong> on your
              answer sheet.
            </p>
          </div>

          <div className="space-y-6 mt-4">
            <div className="question-item">
              <p className="mb-3">
                <strong>38</strong> What does the writer say about 'Words of the
                Year'?
              </p>
              <RadioGroup name="question38" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-a" value="A" />
                  <Label htmlFor="q38-a" className="ml-2">
                    They include increasing numbers of emojis.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-b" value="B" />
                  <Label htmlFor="q38-b" className="ml-2">
                    They are soon forgotten by the public.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-c" value="C" />
                  <Label htmlFor="q38-c" className="ml-2">
                    They are required to have social significance.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-d" value="D" />
                  <Label htmlFor="q38-d" className="ml-2">
                    They are invented by the writers of dictionaries.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39</strong> The writer says that the usefulness of
                emojis is limited because
              </p>
              <RadioGroup name="question39" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-a" value="A" />
                  <Label htmlFor="q39-a" className="ml-2">
                    they are constantly being changed.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-b" value="B" />
                  <Label htmlFor="q39-b" className="ml-2">
                    they may not be correctly interpreted.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-c" value="C" />
                  <Label htmlFor="q39-c" className="ml-2">
                    they are difficult for some people to update.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-d" value="D" />
                  <Label htmlFor="q39-d" className="ml-2">
                    they are linked to specific operating systems.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>40</strong> What would be the best subtitle for this
                text?
              </p>
              <RadioGroup name="question40" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-a" value="A" />
                  <Label htmlFor="q40-a" className="ml-2">
                    Will emojis take over from words one day?
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-b" value="B" />
                  <Label htmlFor="q40-b" className="ml-2">
                    How can emojis be made more meaningful?
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-c" value="C" />
                  <Label htmlFor="q40-c" className="ml-2">
                    Are emojis used too much in our society today?
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-d" value="D" />
                  <Label htmlFor="q40-d" className="ml-2">
                    What do emojis tell us about the world we live in?
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

export default Cambridge19GRTest1Questions;
