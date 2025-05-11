// Cambridge 18 General Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Cambridge18GRTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1–8</h3>
          <p className="mb-2">The passage has seven paragraphs, A-G.</p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-G, in boxes 1-8 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1</strong> a description of the sort of people who are
                involved in civil disobedience today
              </p>
              <RadioGroup name="question1" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2</strong> a reference to the impact of civil
                disobedience on those who practise it
              </p>
              <RadioGroup name="question2" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3</strong> a reference to the need to distinguish civil
                disobedience from other forms of protest
              </p>
              <RadioGroup name="question3" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>4</strong> examples of different causes that have used
                civil disobedience
              </p>
              <RadioGroup name="question4" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>5</strong> an explanation of why a ruler cooperated with
                a civil disobedience movement
              </p>
              <RadioGroup name="question5" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>6</strong> a reference to a change in the law that
                resulted from civil disobedience
              </p>
              <RadioGroup name="question6" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>7</strong> a reference to the part played by the media
                in civil disobedience campaigns
              </p>
              <RadioGroup name="question7" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                <strong>8</strong> a reference to civil disobedience that took
                place in different parts of the world
              </p>
              <RadioGroup name="question8" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9–14</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">In boxes 9–14 on your answer sheet, write</p>
          <div className="mb-4 space-y-1">
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
                <strong>9</strong> According to the writer, taking direct action
                has been more successful than using constitutional methods to
                change the law.
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
                <strong>10</strong> Participants in civil disobedience are free
                to choose whether or not to accept the legal consequences.
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
                <strong>11</strong> Gandhi's aim was to make the British decide
                to give India independence.
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
                <strong>12</strong> Many of the Americans who were against
                segregation on buses did not approve of the methods used to
                oppose it.
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
                <strong>13</strong> Women managed to gain the vote in the UK
                without using civil disobedience.
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
                <strong>14</strong> The government does not allow the media to
                report on civil disobedience.
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
          <h3 className="font-bold mb-2">Questions 15–27</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 15–27 on your answer sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">WORKPLACE WELLNESS</h3>
            <p className="mb-4">
              <strong>Benefits to employers:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Reduced <strong>15</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>Better staff retention</li>
              <li>Greater productivity</li>
            </ul>

            <p className="mb-4">
              <strong>Recommended actions:</strong>
            </p>

            <p className="mb-2">
              <strong>Healthy eating</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Replace <strong>16</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> with
                healthier alternatives
              </li>
              <li>
                Provide <strong>17</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> in
                communal areas
              </li>
              <li>
                Install <strong>18</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> for
                people's food
              </li>
            </ul>

            <p className="mb-2">
              <strong>Exercise</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Create safe storage space for <strong>19</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                Install <strong>20</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> for
                staff who want to do exercise
              </li>
            </ul>

            <p className="mb-2">
              <strong>Feedback</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Conduct health-related <strong>21</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>

            <p className="mb-4">
              <strong>New kitchen facilities and equipment:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Staff should wear <strong>22</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                Wash hands when using notice <strong>23</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                Wash all <strong>24</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                handling containers
              </li>
            </ul>

            <p className="mb-4">
              <strong>Maintenance of kitchen:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Check temperature of <strong>25</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                <strong>26</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> should
                be checked and updated
              </li>
              <li>
                Food should be dated and stored in <strong>27</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 3</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28–35</h3>
          <p className="mb-2">Choose the correct letter, A, B, C, D, or E.</p>
          <p className="mb-4">
            Write the correct letter in boxes 28–35 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>28</strong> According to the text, regardless of what
                decade a copper engraving may have been created in,
              </p>
              <RadioGroup name="question28" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    an expert is always able to distinguish it from other kinds
                    of prints.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    it would be rare for it to have been printed on paper.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    it would have been difficult to spot any variations in the
                    ink.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    there would typically be paper fibers in the areas which had
                    been engraved.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-e" value="E" />
                  <Label htmlFor="q28-e" className="ml-2">
                    the image on the copper plate would have been upside down.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29</strong> In the 16th century, the price of prints
                tended to be relatively high when
              </p>
              <RadioGroup name="question29" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    a large amount of work was involved in producing them.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    printers were unwilling to adapt to new methods.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    lots of color was used.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    many copies of them were being printed.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-e" value="E" />
                  <Label htmlFor="q29-e" className="ml-2">
                    the printing process was slow.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30</strong> As far as prints are concerned, what does
                the writer say was affected by the recommendation of the
                Lombardy Academy of Science?
              </p>
              <RadioGroup name="question30" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    the accuracy of the images
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    the cost of paper
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    the attitude of artists
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    the range of prints available
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-e" value="E" />
                  <Label htmlFor="q30-e" className="ml-2">
                    the type of equipment used
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31</strong> According to the text, the introduction of
                lithography meant that
              </p>
              <RadioGroup name="question31" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    prints no longer needed to be produced by specialists.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    artists had to adapt their style of working.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    it became more difficult to produce prints with a lot of
                    color.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    artists began to use printing as a way of making replicas.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-e" value="E" />
                  <Label htmlFor="q31-e" className="ml-2">
                    it was a more direct way of producing prints.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>32</strong> What does the writer say about Goya?
              </p>
              <RadioGroup name="question32" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-a" value="A" />
                  <Label htmlFor="q32-a" className="ml-2">
                    He preferred printing to painting.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-b" value="B" />
                  <Label htmlFor="q32-b" className="ml-2">
                    He specialized in lithographs.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-c" value="C" />
                  <Label htmlFor="q32-c" className="ml-2">
                    He disliked having his work reproduced.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-d" value="D" />
                  <Label htmlFor="q32-d" className="ml-2">
                    He regarded prints as an important aspect of his output.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-e" value="E" />
                  <Label htmlFor="q32-e" className="ml-2">
                    He created a large number of prints.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33</strong> People who create prints today
              </p>
              <RadioGroup name="question33" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q33-a" value="A" />
                  <Label htmlFor="q33-a" className="ml-2">
                    often like to use traditional equipment.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-b" value="B" />
                  <Label htmlFor="q33-b" className="ml-2">
                    usually need to use computer software.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-c" value="C" />
                  <Label htmlFor="q33-c" className="ml-2">
                    frequently combine both old and new technology.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-d" value="D" />
                  <Label htmlFor="q33-d" className="ml-2">
                    tend to avoid making prints with a lot of detail.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-e" value="E" />
                  <Label htmlFor="q33-e" className="ml-2">
                    generally prefer to create prints without using color.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34</strong> In what way does the writer suggest that the
                status of prints has changed?
              </p>
              <RadioGroup name="question34" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q34-a" value="A" />
                  <Label htmlFor="q34-a" className="ml-2">
                    More prints are being produced than ever before.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-b" value="B" />
                  <Label htmlFor="q34-b" className="ml-2">
                    Prints are still felt to have less value than other types of
                    images.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-c" value="C" />
                  <Label htmlFor="q34-c" className="ml-2">
                    Prints are increasingly seen as worthwhile in their own
                    right.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-d" value="D" />
                  <Label htmlFor="q34-d" className="ml-2">
                    Print-making is attracting fewer artists than in the past.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-e" value="E" />
                  <Label htmlFor="q34-e" className="ml-2">
                    Prints are no longer being produced at specialized centers.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35</strong> What would be the most suitable title for
                this text?
              </p>
              <RadioGroup name="question35" className="flex flex-col gap-4">
                <div className="flex items-center">
                  <RadioGroupItem id="q35-a" value="A" />
                  <Label htmlFor="q35-a" className="ml-2">
                    The decline in the print industry
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-b" value="B" />
                  <Label htmlFor="q35-b" className="ml-2">
                    Unusual prints from around the world
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-c" value="C" />
                  <Label htmlFor="q35-c" className="ml-2">
                    An overview of developments in printing
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-d" value="D" />
                  <Label htmlFor="q35-d" className="ml-2">
                    Printing in Europe in the 19th century
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-e" value="E" />
                  <Label htmlFor="q35-e" className="ml-2">
                    The impact of technology on printing
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36–40</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN ONE WORD</strong> from the text for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 36–40 on your answer sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">Screen Printing</h3>
            <p className="mb-4">
              A screen print is created when ink is pushed through the mesh of a
              screen, parts of which have been blocked using a stencil. The
              screen is made of <strong>36</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> which is
              finely woven and stretched on a frame. The artist works from a
              design, following <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              precisely, and uses a squeegee to press the ink through the mesh.
            </p>
            <p className="mb-4">
              The process was first employed by the Chinese, who used human hair
              to create the mesh. Today, the mesh is commercially produced.
              Modern stencils are frequently created using photo-sensitive
              gelatins but the stencil may also be cut by hand. Some artists
              like to produce stencils with a <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> pattern,
              but it is possible to produce all sorts of images. The screen can
              be used repeatedly, so it is easy to print in several different
              colors or to produce a large number of copies.
            </p>
            <p className="mb-4">
              As well as thinking about the aesthetic impact of the printing
              technique, artists also need to decide what surface to use. Many
              like to use <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> but it is
              also common to use card, plastic, or even <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge18GRTest2Questions;
