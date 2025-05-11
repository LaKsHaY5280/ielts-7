// Cambridge 19 General Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Cambridge19GRTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">Section 1: Passage 1</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1–7</h3>
          <div className="mb-4">
            <p>
              Look at the five descriptions of campsites, <strong>A-E</strong>.
            </p>
            <p>For which campsite are the following statements true?</p>
            <p>
              Write the correct letter, <strong>A-E</strong>, in{" "}
              <strong>boxes 1-7</strong> on your answer sheet.
            </p>
            <p className="mt-2 italic">
              <em>NB You may use any letter more than once.</em>
            </p>
          </div>

          <div className="space-y-6 mt-4">
            <div className="question-item">
              <p className="mb-3">
                <strong>1</strong> The site is impossible to get to at certain
                times.
              </p>
              <RadioGroup name="question1" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q1-a" value="A" />
                  <Label htmlFor="q1-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-b" value="B" />
                  <Label htmlFor="q1-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-c" value="C" />
                  <Label htmlFor="q1-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-d" value="D" />
                  <Label htmlFor="q1-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-e" value="E" />
                  <Label htmlFor="q1-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2</strong> It is in a convenient place for going by car
                to various tourist spots.
              </p>
              <RadioGroup name="question2" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q2-a" value="A" />
                  <Label htmlFor="q2-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-b" value="B" />
                  <Label htmlFor="q2-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-c" value="C" />
                  <Label htmlFor="q2-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-d" value="D" />
                  <Label htmlFor="q2-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-e" value="E" />
                  <Label htmlFor="q2-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3</strong> You should camp somewhere inside the marked
                zone.
              </p>
              <RadioGroup name="question3" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q3-a" value="A" />
                  <Label htmlFor="q3-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-b" value="B" />
                  <Label htmlFor="q3-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-c" value="C" />
                  <Label htmlFor="q3-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-d" value="D" />
                  <Label htmlFor="q3-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-e" value="E" />
                  <Label htmlFor="q3-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>4</strong> Campers who enjoy a particular physical
                challenge come here.
              </p>
              <RadioGroup name="question4" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q4-a" value="A" />
                  <Label htmlFor="q4-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-b" value="B" />
                  <Label htmlFor="q4-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-c" value="C" />
                  <Label htmlFor="q4-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-d" value="D" />
                  <Label htmlFor="q4-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-e" value="E" />
                  <Label htmlFor="q4-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>5</strong> The difficult journey to the site is worth
                the effort.
              </p>
              <RadioGroup name="question5" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q5-a" value="A" />
                  <Label htmlFor="q5-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-b" value="B" />
                  <Label htmlFor="q5-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-c" value="C" />
                  <Label htmlFor="q5-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-d" value="D" />
                  <Label htmlFor="q5-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-e" value="E" />
                  <Label htmlFor="q5-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>6</strong> Few people have heard of this site.
              </p>
              <RadioGroup name="question6" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q6-a" value="A" />
                  <Label htmlFor="q6-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-b" value="B" />
                  <Label htmlFor="q6-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-c" value="C" />
                  <Label htmlFor="q6-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-d" value="D" />
                  <Label htmlFor="q6-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-e" value="E" />
                  <Label htmlFor="q6-e" className="ml-2">
                    E
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>7</strong> Some physical effort is needed to enjoy
                nearby coastal areas.
              </p>
              <RadioGroup name="question7" className="flex gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q7-a" value="A" />
                  <Label htmlFor="q7-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-b" value="B" />
                  <Label htmlFor="q7-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-c" value="C" />
                  <Label htmlFor="q7-c" className="ml-2">
                    C
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-d" value="D" />
                  <Label htmlFor="q7-d" className="ml-2">
                    D
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-e" value="E" />
                  <Label htmlFor="q7-e" className="ml-2">
                    E
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
              Do the following statements agree with the information given in
              the text?
            </p>
            <p>
              In <strong>boxes 8-14</strong> on your answer sheet, write
            </p>
          </div>

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
                <strong>8</strong> The water penetration in some flats is being
                treated as an emergency.
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
                  <RadioGroupItem id="q8-ng" value="NG" />
                  <Label htmlFor="q8-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>9</strong> The southern wall will undergo a permanent
                repair this year.
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
                  <RadioGroupItem id="q9-ng" value="NG" />
                  <Label htmlFor="q9-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10</strong> Some people have failed to pay attention to
                'wet paint' signs.
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
                  <RadioGroupItem id="q10-ng" value="NG" />
                  <Label htmlFor="q10-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11</strong> Air fresheners have caused some damage in
                the past.
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
                  <RadioGroupItem id="q11-ng" value="NG" />
                  <Label htmlFor="q11-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12</strong> Residents are responsible for removing their
                own rubbish from the building.
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
                  <RadioGroupItem id="q12-ng" value="NG" />
                  <Label htmlFor="q12-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13</strong> Some residents have reported problems with
                noisy neighbours.
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
                  <RadioGroupItem id="q13-ng" value="NG" />
                  <Label htmlFor="q13-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>14</strong> DIY can take place outside the stated hours
                if your neighbour agrees.
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
                  <RadioGroupItem id="q14-ng" value="NG" />
                  <Label htmlFor="q14-ng" className="ml-2">
                    NG
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 2</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 15-20</h3>
          <div className="mb-4">
            <p>Complete the flowchart below.</p>
            <p>
              Choose <strong>ONE WORD ONLY</strong> from the text for each
              answer.
            </p>
            <p>
              Write your answers in <strong>boxes 15-20</strong> on your answer
              sheet.
            </p>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-bold mb-3 text-center">
              A day in the life of a care worker
            </h3>
            <Separator className="my-4" />

            <div className="space-y-6 text-center">
              <p>
                It's an early start for the first client. You may have to help
                the client get up and dressed if they have a <strong>15</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
                that makes this challenging.
              </p>
              <p>⬇</p>
              <p>
                The next task may be cooking breakfast and it's nice to have
                some <strong>16</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> at this
                time.
              </p>
              <p>⬇</p>
              <p>
                It may be a good idea to do some housework after this, such as{" "}
                <strong>17</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> and
                washing up.
              </p>
              <p>⬇</p>
              <p>
                You may then visit a second client and help them get a{" "}
                <strong>18</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> lunch
                ready.
              </p>
              <p>⬇</p>
              <p>
                Lunch may be followed by some <strong>19</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
              <p>⬇</p>
              <p>
                Afterwards, a third client may need help with an activity that
                involves going out of their home, such as doing their{" "}
                <strong>20</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
              <p>⬇</p>
              <p>
                You may cook dinner with the final client of the day and also
                remind them about their medication.
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-27</h3>
          <div className="mb-4">
            <p>Complete the sentences below.</p>
            <p>
              Choose <strong>ONE WORD ONLY</strong> from the text for each
              answer.
            </p>
            <p>
              Write your answers in <strong>boxes 21-27</strong> on your answer
              sheet.
            </p>
          </div>

          <div className="space-y-4 mt-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> People who cut down the hours they work gain
                most from feeling better physically and experiencing an
                increased sense of{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> It is important that those who work at desks
                avoid <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                by checking their chair, work surface and screen are in the best
                position.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>23</strong> Having targets to work towards is useful but
                they should be{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>24</strong> When there are many different tasks to do,
                the ability to{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> them is
                vital.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>25</strong> People who give up all treats in their
                personal time may find their{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                decreases.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>26</strong> It is wise to use the full amount of{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                allowance every year.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> Making time to do things with close
                companions, relatives or{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> is a
                great way to relax.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 3</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28-31</h3>
          <div className="mb-4">
            <p>
              Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
              <strong>C</strong> or <strong>D</strong>.
            </p>
            <p>
              Write the correct letter in <strong>boxes 28-31</strong> on your
              answer sheet.
            </p>
          </div>

          <div className="space-y-6 mt-4">
            <div className="question-item">
              <p className="mb-3">
                <strong>28</strong> In the first paragraph, what does the writer
                say about Amsterdam?
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    It reduced obesity before Leeds did.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    It had a similar programme to 'Henry'.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    It had less severe obesity problems.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    It tackled obesity in different areas.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29</strong> Susan Jebb believes Leeds is significant
                because
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    the obesity figures can be trusted.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    similar cities had very different results.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    the research has been running for a long time.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    the reduction in obesity occurred where it was most needed.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30</strong> According to the text, when does the biggest
                drop in obesity rates occur?
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    during the early school years
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    at the end of primary school
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    among the poorest children
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    after four years of the programme
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31</strong> What does Kim Roberts say about
                authoritative parenting?
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    It encourages parents to make decisions for their children.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    It allows children to feel in control of mealtime choices.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    It helps parents and children to reach a compromise.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    It works better than telling children what to do.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-35</h3>
          <div className="mb-4">
            <p>
              Complete the summary using the list of words, <strong>A-H</strong>
              , below.
            </p>
            <p>
              Write the correct letter, <strong>A-H</strong>, in{" "}
              <strong>boxes 32-35</strong> on your answer sheet.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h4 className="font-bold mb-2">The 'Henry' programme</h4>

            <p className="mb-4">
              The 'Henry' programme was introduced in Leeds in 2009 with a
              special focus on young children and <strong>32</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
              families. Parents on the course learn the importance of creating{" "}
              <strong>33</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for their
              children. The programme shows parents how to adopt a style that
              avoids simply telling children what to do, or allowing them to
              make all their own <strong>34</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. Lisa,
              who attended a 'Henry' course, found benefits for her health and
              finances and believes it made her a better <strong>35</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-6">
              <div className="bg-white p-2 border rounded">A bedtimes</div>
              <div className="bg-white p-2 border rounded">B boundaries</div>
              <div className="bg-white p-2 border rounded">C choices</div>
              <div className="bg-white p-2 border rounded">D influence</div>
              <div className="bg-white p-2 border rounded">E low-income</div>
              <div className="bg-white p-2 border rounded">F parent</div>
              <div className="bg-white p-2 border rounded">G person</div>
              <div className="bg-white p-2 border rounded">H restrictions</div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <div className="mb-4">
            <p>
              Do the following statements agree with the views of the people
              below?
            </p>
            <p>
              In boxes <strong>36-40</strong> on your answer sheet, write
            </p>
          </div>

          <div className="mb-6 space-y-1">
            <p>
              <strong>YES</strong> if the statement agrees with the views of the
              person
            </p>
            <p>
              <strong>NO</strong> if the statement contradicts the views of the
              person
            </p>
            <p>
              <strong>NOT GIVEN</strong> if it is impossible to say what the
              person thinks about this
            </p>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-bold">Janice Burberry</h4>

              <div className="question-item mt-4">
                <p className="mb-3">
                  <strong>36</strong> Helping children when they are very young
                  is important.
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
                    <RadioGroupItem id="q36-ng" value="NG" />
                    <Label htmlFor="q36-ng" className="ml-2">
                      NG
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="question-item mt-4">
                <p className="mb-3">
                  <strong>37</strong> A simple approach works well for all
                  families.
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
                    <RadioGroupItem id="q37-ng" value="NG" />
                    <Label htmlFor="q37-ng" className="ml-2">
                      NG
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <h4 className="font-bold">Seema Kennedy</h4>

              <div className="question-item mt-4">
                <p className="mb-3">
                  <strong>38</strong> She is impressed by the success of local
                  programmes.
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
                    <RadioGroupItem id="q38-ng" value="NG" />
                    <Label htmlFor="q38-ng" className="ml-2">
                      NG
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="question-item mt-4">
                <p className="mb-3">
                  <strong>39</strong> Parents need to spend more time with their
                  children.
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
                    <RadioGroupItem id="q39-ng" value="NG" />
                    <Label htmlFor="q39-ng" className="ml-2">
                      NG
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="question-item mt-4">
                <p className="mb-3">
                  <strong>40</strong> Extra resources should be given to
                  programmes like 'Henry'.
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
                    <RadioGroupItem id="q40-ng" value="NG" />
                    <Label htmlFor="q40-ng" className="ml-2">
                      NG
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge19GRTest2Questions;
