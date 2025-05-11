// Cambridge 19 General Reading Test 3 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Cambridge19GRTest3Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1–8</h3>
          <p className="mb-2">
            Look at the five film reviews, <strong>A–E</strong>.
          </p>
          <p className="mb-2">
            For which film review are the following statements true?
          </p>
          <p className="mb-2">
            Write the correct letter, <strong>A–E</strong>, in boxes{" "}
            <strong>1–8</strong> on your answer sheet.
          </p>
          <p className="mb-4 italic">
            <em>NB You may use any letter more than once.</em>
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1</strong> The reviewer thinks some of the cast are
                unsuitable for their roles.
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
                <strong>2</strong> The dialogue in this film seems unrealistic.
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
                <strong>3</strong> The reviewer found this film unexpectedly
                emotional.
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
                <strong>4</strong> This film contains dialogue that is
                uninteresting for some viewers.
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
                <strong>5</strong> This film carries a moral message.
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
                <strong>6</strong> Non-actors take part in this film.
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
                <strong>7</strong> The reviewer thinks this film should be seen
                again.
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

            <div className="question-item">
              <p className="mb-3">
                <strong>8</strong> This film mentions things that audience
                members won't know about.
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9–14</h3>
          <p className="mb-2">
            Look at the four advertisements for sports events,{" "}
            <strong>A–D</strong>.
          </p>
          <p className="mb-2">
            For which event are the following statements true?
          </p>
          <p className="mb-2">
            Write the correct letter, <strong>A–D</strong>, in boxes{" "}
            <strong>9–14</strong> on your answer sheet.
          </p>
          <p className="mb-4 italic">
            <em>NB You may use any letter more than once.</em>
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>9</strong> You see spectacular scenery.
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
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10</strong> You are provided with special clothing.
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
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11</strong> You may be watched while you are doing the
                activity.
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
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12</strong> You watch someone else before doing the
                activity yourself.
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
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13</strong> You meet people who are expert at the
                activity.
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
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>14</strong> You can raise money for a charity.
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
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 2</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 15–21</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 15–21</strong> on your answer
            sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">Dealing with redundancy</h3>
            <h4 className="font-bold">Initial steps</h4>
            <p>
              Start by considering what needs to be done and make a{" "}
              <strong>15</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to work
              through.
            </p>
            <p>
              Get the company's policy concerning laying off staff and check
              personal work-related documents.
            </p>

            <h4 className="font-bold mt-2">Dealing with the company</h4>
            <p>Avoid letting the management see you are annoyed because:</p>
            <ul className="list-disc ml-6 space-y-1 my-2">
              <li>
                you want to receive a positive <strong>16</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> from
                them for a future post.
              </li>
              <li>
                you might get some <strong>17</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                projects from them in the future.
              </li>
            </ul>

            <h4 className="font-bold mt-2">Moving on</h4>
            <p>
              Find an organisation that specialises in <strong>18</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to help
              you look for another job.
            </p>
            <p>
              Invest time in doing serious <strong>19</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              concerning the current requirements in your sector.
            </p>
            <p>
              Consider if your work and training records contain{" "}
              <strong>20</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> that
              might prevent you finding work.
            </p>
            <p>
              Sign up for any relevant courses to improve your chances of being
              selected for a new post.
            </p>

            <h4 className="font-bold mt-2">Conclusion</h4>
            <p>
              Look on redundancy as a useful <strong>21</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to
              advance, rather than the end of your career.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 22–27</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 22–27</strong> on your answer
            sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> New staff must record their own body{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> before
                arriving at work.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>23</strong> You should use your{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> to
                ensure that your uniform is never dirty.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>24</strong> Clothes worn to travel to work must be{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>25</strong> Casual wear, such as{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />, should
                not be worn in the kitchen area.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>26</strong> Staff using{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> may
                still come to work.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> Please contact the manager before arriving
                at the kitchens if you have any{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> or
                other similar injuries.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 3</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28–32</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in <strong>boxes 28–32</strong> on your
            answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>28</strong> In Paragraph A, what does the writer say
                about the archaeology team's work?
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A It confirmed what they had assumed when they started it.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B It was hard to persuade other historians about their
                    findings.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C It could reveal the importance of various women in
                    history.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D It could help identify the number of books written in the
                    Middle Ages.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29</strong> What point does the writer make about dental
                tartar in Paragraph C?
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A Archaeologists could make more use of it than they do at
                    present.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B Some particles are more easily trapped in it than others.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C The environment can cause it to break down.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D Changes in people's diet have influenced its composition.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30</strong> What did the skeleton of B78 suggest about
                her?
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    A She had not been very old when she died.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    B Her life had not been very physically demanding.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    C Her teeth had more tartar than most skeletons of that age.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    D She had been given a grander burial than other women of
                    her time.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31</strong> What is the writer doing in Paragraph F?
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    A supporting the team's view that the blue pigment was
                    imported
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    B explaining why artists in Europe liked to use the blue
                    pigment
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    C comparing artistic designs using the blue pigment in
                    different parts of the world
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    D criticising arguments put forward by other scientists
                    about the blue pigment
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>32</strong> What problem does the writer highlight about
                medieval artists in Paragraph G?
              </p>
              <RadioGroup name="question32" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-a" value="A" />
                  <Label htmlFor="q32-a" className="ml-2">
                    A the poor facilities available to females in the profession
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-b" value="B" />
                  <Label htmlFor="q32-b" className="ml-2">
                    B the small number of projects available to them
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-c" value="C" />
                  <Label htmlFor="q32-c" className="ml-2">
                    C the difficulties locating their skeletal remains for study
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-d" value="D" />
                  <Label htmlFor="q32-d" className="ml-2">
                    D the lack of evidence for their contribution to books
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 33–36</h3>
          <p className="mb-2">
            The text has seven paragraphs, <strong>A–G</strong>.
          </p>
          <p className="mb-2">Which paragraph mentions the following?</p>
          <p className="mb-4">
            Write the correct letter, <strong>A–G</strong>, in boxes{" "}
            <strong>33–36</strong> on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> reference to the possible length of time
                that tartar can preserve particles from the air
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
                <strong>34</strong> two reasons why the particles that the team
                found in teeth were unique
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
                <strong>35</strong> various examples of the types of particle
                that can be discovered in old teeth
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
                <strong>36</strong> a suggestion that the blue pigment might
                have been used in medieval times to cure illness
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37–40</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes <strong>37–40</strong> on your answer
            sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">Lapis lazuli</h3>
            <p className="mb-2">
              A blue pigment used to create artworks in Europe in the Middle
              Ages was derived from a stone called lapis lazuli. In medieval
              times, even <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> was not
              as valuable. Lapis lazuli could only be found in Afghanistan and a
              lot of <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> was
              needed to make the pigment from the stone.
            </p>
            <p className="mb-2">
              The procedure used to do this appeared much later in the manuals
              used by European artists and this suggests that the product came
              to their countries as an imported powder. Artists often had to
              make a <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> on their
              brushes using their mouths, which then enabled them to produce the
              fine features needed for <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and
              books.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge19GRTest3Questions;
