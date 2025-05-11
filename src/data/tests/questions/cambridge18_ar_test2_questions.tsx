import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 18 Academic Reading Test 2
 */
export const Cambridge18ARTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-8</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-8 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Stonehenge</h4>
            <h5 className="font-bold mb-2">Construction</h5>

            <p className="mb-2">Stage 1:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                the ditch and henge were dug, possibly using tools made from{" "}
                <strong>1</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                <strong>2</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> may
                have been arranged in deep pits inside the circle
              </li>
            </ul>

            <p className="mb-2">Stage 2:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                bluestones from the Preseli Hills were placed in standing
                position
              </li>
              <li>
                theories about the transportation of the bluestones:
                <ul className="list-disc pl-5">
                  <li>
                    archaeological:
                    <ul className="list-disc pl-5">
                      <li>
                        builders used <strong>3</strong>{" "}
                        <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                        to make sledges and rollers
                      </li>
                      <li>
                        <strong>4</strong>{" "}
                        <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                        pulled them on giant baskets
                      </li>
                    </ul>
                  </li>
                  <li>
                    geological:
                    <ul className="list-disc pl-5">
                      <li>
                        they were brought from Wales by <strong>5</strong>{" "}
                        <Input type="text" className="w-32 mx-1 inline-block" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <p className="mb-2">Stage 3:</p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                sandstone slabs were arranged into an outer crescent or ring
              </li>
            </ul>

            <h5 className="font-bold mb-2">Builders</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                a theory arose in the 17th century that its builders were Celtic{" "}
                <strong>6</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>

            <h5 className="font-bold mb-2">Purpose</h5>
            <ul className="list-disc pl-5 mb-4">
              <li>
                many experts agree it has been used as a <strong>7</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> site
              </li>
              <li>
                in the 1960s, it was suggested that it worked as a kind of{" "}
                <strong>8</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 9-13 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>TRUE</strong> if the statement agrees with the information
            </p>
            <p className="mb-1">
              <strong>FALSE</strong> if the statement contradicts the
              information
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>9</strong> During the third phase of construction,
                sandstone slabs were placed in both the outer areas and the
                middle of the Stonehenge site.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q9-true" />
                  <Label htmlFor="q9-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q9-false" />
                  <Label htmlFor="q9-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q9-ng" />
                  <Label htmlFor="q9-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>10</strong> There is scientific proof that the
                bluestones stood in the same spot until approximately 1600 BCE.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q10-true" />
                  <Label htmlFor="q10-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q10-false" />
                  <Label htmlFor="q10-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q10-ng" />
                  <Label htmlFor="q10-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>11</strong> John Aubrey's claim about Stonehenge was
                supported by 20th-century findings.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q11-true" />
                  <Label htmlFor="q11-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q11-false" />
                  <Label htmlFor="q11-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q11-ng" />
                  <Label htmlFor="q11-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>12</strong> Objects discovered at Stonehenge seem to
                indicate that it was constructed by a number of different groups
                of people.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q12-true" />
                  <Label htmlFor="q12-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q12-false" />
                  <Label htmlFor="q12-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q12-ng" />
                  <Label htmlFor="q12-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>13</strong> Criticism of Gerald Hawkins' theory about
                Stonehenge has come mainly from other astronomers.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q13-true" />
                  <Label htmlFor="q13-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q13-false" />
                  <Label htmlFor="q13-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q13-ng" />
                  <Label htmlFor="q13-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-19</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 14-19 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> What point does the writer make about AI in
                the first paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q14-a" className="mt-1" />
                  <Label htmlFor="q14-a" className="flex-1">
                    A It is difficult to predict how quickly AI will progress.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q14-b" className="mt-1" />
                  <Label htmlFor="q14-b" className="flex-1">
                    B Much can be learned about the use of AI in chess machines.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q14-c" className="mt-1" />
                  <Label htmlFor="q14-c" className="flex-1">
                    C The future is unlikely to see limitations on the
                    capabilities of AI.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q14-d" className="mt-1" />
                  <Label htmlFor="q14-d" className="flex-1">
                    D Experts disagree on which specialised tasks AI will be
                    able to perform.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> What is the writer doing in the second
                paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q15-a" className="mt-1" />
                  <Label htmlFor="q15-a" className="flex-1">
                    A explaining why machines will be able to outperform humans
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q15-b" className="mt-1" />
                  <Label htmlFor="q15-b" className="flex-1">
                    B describing the characteristics that humans and machines
                    share
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q15-c" className="mt-1" />
                  <Label htmlFor="q15-c" className="flex-1">
                    C giving information about the development of machine
                    intelligence
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q15-d" className="mt-1" />
                  <Label htmlFor="q15-d" className="flex-1">
                    D indicating which aspects of humans are the most advanced
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> Why does the writer mention the story of
                King Midas?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q16-a" className="mt-1" />
                  <Label htmlFor="q16-a" className="flex-1">
                    A to compare different visions of progress
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q16-b" className="mt-1" />
                  <Label htmlFor="q16-b" className="flex-1">
                    B to illustrate that poorly defined objectives can go wrong
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q16-c" className="mt-1" />
                  <Label htmlFor="q16-c" className="flex-1">
                    C to emphasise the need for cooperation
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q16-d" className="mt-1" />
                  <Label htmlFor="q16-d" className="flex-1">
                    D to point out the financial advantages of a course of
                    action
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> What challenge does the writer refer to in
                the fourth paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q17-a" className="mt-1" />
                  <Label htmlFor="q17-a" className="flex-1">
                    A encouraging humans to behave in a more principled way
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q17-b" className="mt-1" />
                  <Label htmlFor="q17-b" className="flex-1">
                    B deciding which values we want AI to share with us
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q17-c" className="mt-1" />
                  <Label htmlFor="q17-c" className="flex-1">
                    C creating a better world for all creatures on the planet
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q17-d" className="mt-1" />
                  <Label htmlFor="q17-d" className="flex-1">
                    D ensuring AI is more human-friendly than we are ourselves
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> What does the writer suggest about the
                future of AI in the fifth paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q18-a" className="mt-1" />
                  <Label htmlFor="q18-a" className="flex-1">
                    A The safety of machines will become a key issue.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q18-b" className="mt-1" />
                  <Label htmlFor="q18-b" className="flex-1">
                    B It is hard to know what impact machines will have on the
                    world.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q18-c" className="mt-1" />
                  <Label htmlFor="q18-c" className="flex-1">
                    C Machines will be superior to humans in certain respects.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q18-d" className="mt-1" />
                  <Label htmlFor="q18-d" className="flex-1">
                    D Many humans will oppose machines having a wider role.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> Which of the following best summarises the
                writer's argument in the sixth paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q19-a" className="mt-1" />
                  <Label htmlFor="q19-a" className="flex-1">
                    A More intelligent machines will result in greater abuses of
                    power.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q19-b" className="mt-1" />
                  <Label htmlFor="q19-b" className="flex-1">
                    B Machine learning will share very few features with human
                    learning.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q19-c" className="mt-1" />
                  <Label htmlFor="q19-c" className="flex-1">
                    C There are a limited number of people with the knowledge to
                    program machines.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q19-d" className="mt-1" />
                  <Label htmlFor="q19-d" className="flex-1">
                    D Human shortcomings will make creating the machines we need
                    more difficult.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 20-23</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 2?
          </p>
          <p className="mb-2">In boxes 20-23 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>YES</strong> if the statement agrees with the claims of
              the writer
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

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> Machines with the ability to make moral
                decisions may prevent us from promoting the interests of our
                communities.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q20-yes" />
                  <Label htmlFor="q20-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q20-no" />
                  <Label htmlFor="q20-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q20-ng" />
                  <Label htmlFor="q20-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> Silicon police would need to exist in large
                numbers in order to be effective.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q21-yes" />
                  <Label htmlFor="q21-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q21-no" />
                  <Label htmlFor="q21-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q21-ng" />
                  <Label htmlFor="q21-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> Many people are comfortable with the
                prospect of their independence being restricted by machines.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q22-yes" />
                  <Label htmlFor="q22-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q22-no" />
                  <Label htmlFor="q22-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q22-ng" />
                  <Label htmlFor="q22-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>23</strong> If we want to ensure that machines act in
                our best interests, we all need to work together.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q23-yes" />
                  <Label htmlFor="q23-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q23-no" />
                  <Label htmlFor="q23-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q23-ng" />
                  <Label htmlFor="q23-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 24-26</h3>
          <p className="mb-2">
            Complete the summary using the list of phrases, A-F, below.
          </p>
          <p className="mb-4">
            Write the correct letter, A-F, in boxes 24-26 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Using AI in the UK health system</h4>
            <p className="mb-4">
              AI currently has a limited role in the way <strong>24</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-F"
              />{" "}
              are allocated in the health service. The positive aspect of AI
              having a bigger role is that it would be more efficient and lead
              to patient benefits. However, such a change would result, for
              example, in certain <strong>25</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-F"
              />{" "}
              not having their current level of <strong>26</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-F"
              />
              . It is therefore important that AI goals are appropriate so that
              discriminatory practices could be avoided.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <strong>A</strong> medical practitioners
              </div>
              <div>
                <strong>B</strong> specialised tasks
              </div>
              <div>
                <strong>C</strong> available resources
              </div>
              <div>
                <strong>D</strong> reduced illness
              </div>
              <div>
                <strong>E</strong> professional authority
              </div>
              <div>
                <strong>F</strong> technology experts
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-33</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 27-33 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>TRUE</strong> if the statement agrees with the information
            </p>
            <p className="mb-1">
              <strong>FALSE</strong> if the statement contradicts the
              information
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> People first referred to Leonardo da Vinci
                as a genius 500 years ago.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q27-true" />
                  <Label htmlFor="q27-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q27-false" />
                  <Label htmlFor="q27-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q27-ng" />
                  <Label htmlFor="q27-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> The current climate crisis is predicted to
                cause more deaths than the plague.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q28-true" />
                  <Label htmlFor="q28-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q28-false" />
                  <Label htmlFor="q28-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q28-ng" />
                  <Label htmlFor="q28-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> Some of the challenges we face today can be
                compared to those of earlier times.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q29-true" />
                  <Label htmlFor="q29-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q29-false" />
                  <Label htmlFor="q29-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q29-ng" />
                  <Label htmlFor="q29-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> Leonardo da Vinci's 'ideal city' was
                constructed in the 15th century.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q30-true" />
                  <Label htmlFor="q30-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q30-false" />
                  <Label htmlFor="q30-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q30-ng" />
                  <Label htmlFor="q30-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> Poor town planning is a major contributor to
                climate change.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q31-true" />
                  <Label htmlFor="q31-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q31-false" />
                  <Label htmlFor="q31-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q31-ng" />
                  <Label htmlFor="q31-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>32</strong> In Renaissance times, local people fought
                against the changes to Pienza and Ferrara.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q32-true" />
                  <Label htmlFor="q32-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q32-false" />
                  <Label htmlFor="q32-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q32-ng" />
                  <Label htmlFor="q32-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> Leonardo da Vinci kept a neat, organised
                record of his designs.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q33-true" />
                  <Label htmlFor="q33-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q33-false" />
                  <Label htmlFor="q33-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q33-ng" />
                  <Label htmlFor="q33-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 34-40</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 34-40 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Leonardo da Vinci's ideal city</h4>
            <p className="mb-4">
              A collection of Leonardo da Vinci's paperwork reveals his design
              of a new city beside the Ticino River. This was to provide better{" "}
              <strong>34</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for trade
              and a less polluted environment. Although Leonardo da Vinci's city
              shared many of the ideals of his time, some of his innovations
              were considered unconventional in their design. They included
              features that can be seen in some tower blocks today, such as{" "}
              <strong>35</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> on the
              exterior of a building.
            </p>

            <p className="mb-4">
              Leonardo da Vinci wasn't only an architect. His expertise in{" "}
              <strong>36</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> was
              evident in his plans for artificial canals within his ideal city.
              He also believed that the width of streets should relate to the
              height of houses in case earthquakes occurred. The design of many
              cities in Italy today follows this <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>

            <p className="mb-4">
              While some cities from <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> times
              have aspects that can also be found in Leonardo's designs, his
              ideas weren't put into practice until long after his death.{" "}
              <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is one
              example of a city that was redesigned in the 19th century in the
              way that Leonardo had envisaged. His ideas are also relevant to
              today's world, where building <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> no longer
              seems to be the best approach.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
