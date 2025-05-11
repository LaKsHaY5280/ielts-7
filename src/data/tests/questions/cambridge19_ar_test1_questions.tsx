import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 19 Academic Reading Test 1
 */
export const Cambridge19ARTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

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
                <strong>1</strong> People had expected Andy Murray to become the
                world's top tennis player for at least five years before 2016.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q1-true" />
                  <Label htmlFor="q1-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q1-false" />
                  <Label htmlFor="q1-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q1-ng" />
                  <Label htmlFor="q1-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>2</strong> Murray's decision to change his racket
                strings was widely discussed at the time.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q2-true" />
                  <Label htmlFor="q2-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q2-false" />
                  <Label htmlFor="q2-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q2-ng" />
                  <Label htmlFor="q2-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>3</strong> Colin Triplow has made a racket for Andy
                Murray.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q3-true" />
                  <Label htmlFor="q3-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q3-false" />
                  <Label htmlFor="q3-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q3-ng" />
                  <Label htmlFor="q3-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>4</strong> The Bryans' rackets differ from standard
                rackets in several ways.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q4-true" />
                  <Label htmlFor="q4-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q4-false" />
                  <Label htmlFor="q4-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q4-ng" />
                  <Label htmlFor="q4-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>5</strong> Players today are prepared to spend more time
                modifying their rackets than players in the past.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q5-true" />
                  <Label htmlFor="q5-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q5-false" />
                  <Label htmlFor="q5-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q5-ng" />
                  <Label htmlFor="q5-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>6</strong> The International Tennis Federation banned
                Werner Fischer's racket because it offered an unfair competitive
                advantage.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q6-true" />
                  <Label htmlFor="q6-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q6-false" />
                  <Label htmlFor="q6-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q6-ng" />
                  <Label htmlFor="q6-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>7</strong> Professional players change their racket
                set-up according to a variety of factors.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q7-true" />
                  <Label htmlFor="q7-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q7-false" />
                  <Label htmlFor="q7-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q7-ng" />
                  <Label htmlFor="q7-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8-13</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 8-13 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>8</strong> The Bryan brothers have tried out various
                types of{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> on
                their rackets.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>9</strong> Fischer's spaghetti-strung racket was banned
                because it produced too much{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>10</strong> Nowadays, racket modification is as
                important to a player as{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> or
                nutrition.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>11</strong> Traditional tennis rackets used natural
                string made from sheep or cow{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>12</strong> Pete Sampras added lead{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> to his
                rackets to increase his serving power.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>13</strong> Gonçalo Oliveira replaced the original{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> on his
                rackets because they felt uncomfortable.
              </p>
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
          <p className="mb-2">Reading Passage 2 has seven paragraphs, A-G.</p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-G, in boxes 14-19 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> a mention of attempts to deal with piracy by
                dividing a sea area into parts
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> a reference to how pirates were given a new
                role after their defeat
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> a reference to governments collaborating
                with pirates for military purposes
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> an explanation of the first known specific
                groups of Mediterranean pirates
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> a reference to Rome finally taking action
                against pirates
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> a description of how geographic features of
                the Mediterranean affected the development of piracy
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 20-21</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 20-21 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> factors initially helped pirates to avoid
            being caught?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q20-21-a" />
              <Label htmlFor="q20-21-a" className="flex-1">
                A using very fast ships
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q20-21-b" />
              <Label htmlFor="q20-21-b" className="flex-1">
                B knowing the waters well
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q20-21-c" />
              <Label htmlFor="q20-21-c" className="flex-1">
                C using unexpected weapons
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q20-21-d" />
              <Label htmlFor="q20-21-d" className="flex-1">
                D sailing to distant destinations
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q20-21-e" />
              <Label htmlFor="q20-21-e" className="flex-1">
                E travelling at night
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 22-23</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 22-23 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> statements describe the ancient Greek
            attitude towards piracy?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q22-23-a" />
              <Label htmlFor="q22-23-a" className="flex-1">
                A It was seen as harmful to Greek economic interests.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q22-23-b" />
              <Label htmlFor="q22-23-b" className="flex-1">
                B It was difficult to control due to the number of pirates.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q22-23-c" />
              <Label htmlFor="q22-23-c" className="flex-1">
                C It was seen as a natural part of life.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q22-23-d" />
              <Label htmlFor="q22-23-d" className="flex-1">
                D It was restricted to those from poor backgrounds.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q22-23-e" />
              <Label htmlFor="q22-23-e" className="flex-1">
                E It was admired and portrayed in a positive light.
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 24-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN ONE WORD</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 24-26 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Rome and piracy</h4>
            <p className="mb-4">
              At first, the Romans tolerated pirates because they brought slaves
              that were needed for agriculture and mining. However, the Romans
              began to object when their supply of <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> was
              affected by pirate attacks. Members of the Roman Senate called for{" "}
              <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of the
              pirates, but their demands were not acted upon. By the 1st century
              BCE, however, pirates had started to kidnap important Romans, even
              Julius Caesar, and demand a <strong>26</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. At this
              point, Rome initiated a successful campaign against the pirates.
            </p>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 27-31 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> According to the writer, which of the
                following makes misinformation a bigger problem today than in
                the past?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q27-a" className="mt-1" />
                  <Label htmlFor="q27-a" className="flex-1">
                    A People are more likely to tell lies on purpose than they
                    were before.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q27-b" className="mt-1" />
                  <Label htmlFor="q27-b" className="flex-1">
                    B It is harder than ever to know when a statement is
                    correct.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q27-c" className="mt-1" />
                  <Label htmlFor="q27-c" className="flex-1">
                    C There are more reasons for deceiving others than ever
                    before.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q27-d" className="mt-1" />
                  <Label htmlFor="q27-d" className="flex-1">
                    D Information can be shared with huge numbers of people
                    simultaneously.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> What does the writer suggest about
                misinformation in paragraph 3?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q28-a" className="mt-1" />
                  <Label htmlFor="q28-a" className="flex-1">
                    A It can lead people to make decisions they wouldn't
                    normally make.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q28-b" className="mt-1" />
                  <Label htmlFor="q28-b" className="flex-1">
                    B Its impact on politics is more damaging than on other
                    aspects of society.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q28-c" className="mt-1" />
                  <Label htmlFor="q28-c" className="flex-1">
                    C Few attempts have been made to study its impact on
                    people's thinking.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q28-d" className="mt-1" />
                  <Label htmlFor="q28-d" className="flex-1">
                    D Most research has been done on the beliefs of large groups
                    rather than individuals.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> What does the writer say about Descartes'
                and Spinoza's views?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q29-a" className="mt-1" />
                  <Label htmlFor="q29-a" className="flex-1">
                    A They were influenced by people's actual reactions to
                    events.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q29-b" className="mt-1" />
                  <Label htmlFor="q29-b" className="flex-1">
                    B They have failed to stand the test of time.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q29-c" className="mt-1" />
                  <Label htmlFor="q29-c" className="flex-1">
                    C Scientific research has only recently examined them
                    carefully.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q29-d" className="mt-1" />
                  <Label htmlFor="q29-d" className="flex-1">
                    D They agreed that reason was a key aspect of human mental
                    activity.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> What is the writer's point about regulatory
                bodies in paragraph 6?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q30-a" className="mt-1" />
                  <Label htmlFor="q30-a" className="flex-1">
                    A Their attempts to check information are time-consuming.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q30-b" className="mt-1" />
                  <Label htmlFor="q30-b" className="flex-1">
                    B They are reluctant to take action against media
                    organizations.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q30-c" className="mt-1" />
                  <Label htmlFor="q30-c" className="flex-1">
                    C Their focus is on responding to complaints by the public.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q30-d" className="mt-1" />
                  <Label htmlFor="q30-d" className="flex-1">
                    D They primarily act after misinformation has been
                    published.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> What is the purpose of paragraph 7?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q31-a" className="mt-1" />
                  <Label htmlFor="q31-a" className="flex-1">
                    A to illustrate the type of work done by the FDA
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q31-b" className="mt-1" />
                  <Label htmlFor="q31-b" className="flex-1">
                    B to describe how successful campaigns deal with
                    misinformation
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q31-c" className="mt-1" />
                  <Label htmlFor="q31-c" className="flex-1">
                    C to emphasize the importance of educating young children
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q31-d" className="mt-1" />
                  <Label htmlFor="q31-d" className="flex-1">
                    D to present another challenge relating to misinformation
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-35</h3>
          <p className="mb-2">
            Do the following statements agree with the views of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 32-35 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>YES</strong> if the statement agrees with the views of the
              writer
            </p>
            <p className="mb-1">
              <strong>NO</strong> if the statement contradicts the views of the
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
                <strong>32</strong> The same technology that allows
                misinformation to spread may also help to address the problem.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q32-yes" />
                  <Label htmlFor="q32-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q32-no" />
                  <Label htmlFor="q32-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q32-ng" />
                  <Label htmlFor="q32-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> Media organizations should correct
                misinformation immediately after it occurs.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q33-yes" />
                  <Label htmlFor="q33-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q33-no" />
                  <Label htmlFor="q33-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q33-ng" />
                  <Label htmlFor="q33-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34</strong> Recent research supports Descartes'
                explanation of how the brain responds to new information.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q34-yes" />
                  <Label htmlFor="q34-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q34-no" />
                  <Label htmlFor="q34-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q34-ng" />
                  <Label htmlFor="q34-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35</strong> More successful campaigns against
                misinformation would make most regulatory bodies unnecessary.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q35-yes" />
                  <Label htmlFor="q35-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q35-no" />
                  <Label htmlFor="q35-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q35-ng" />
                  <Label htmlFor="q35-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <p className="mb-2">
            Complete the summary using the list of phrases, A-J, below.
          </p>
          <p className="mb-4">
            Write the correct letter, A-J, in boxes 36-40 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Dealing with misinformation</h4>
            <p className="mb-4">
              According to Southwell, the problem of misinformation in the
              modern world requires a <strong>36</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              approach rather than hoping for a rapid fix. While some work has
              already been done to tackle the issue, more thought needs to be
              given to finding <strong>37</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />
              . Southwell emphasizes the importance of having reliable processes
              for <strong>38</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />
              , given the speed that misinformation can spread. In future, the{" "}
              <strong>39</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              may play an important role in efforts to counter misinformation.
              Success will also depend on raising awareness of the extent to
              which harmful misinformation is the result of <strong>40</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />
              .
            </p>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <strong>A</strong> long-term
              </div>
              <div>
                <strong>B</strong> tracking false information
              </div>
              <div>
                <strong>C</strong> traditional methods
              </div>
              <div>
                <strong>D</strong> repeated testing
              </div>
              <div>
                <strong>E</strong> scientific community
              </div>
              <div>
                <strong>F</strong> theoretical solutions
              </div>
              <div>
                <strong>G</strong> mass media
              </div>
              <div>
                <strong>H</strong> human error
              </div>
              <div>
                <strong>I</strong> general public
              </div>
              <div>
                <strong>J</strong> deliberate deception
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
