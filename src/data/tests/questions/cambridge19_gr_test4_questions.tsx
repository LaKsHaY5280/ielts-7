// Cambridge 19 General Reading Test 4 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Cambridge19GRTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1–7</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">In boxes 1–7 on your answer sheet, write</p>
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
                <strong>1</strong> You can be fined if you fail to use a cycle
                lane.
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
                <strong>2</strong> Cyclists are allowed to ride two abreast as
                long as they keep within 1.5 metres of each other.
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
                <strong>3</strong> Cyclists must carry a warning device such as
                a bell.
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
                <strong>4</strong> When cycling at night, you are required to
                wear a reflective jacket.
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
                <strong>5</strong> Children under twelve are exempt from cycling
                rules.
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
                <strong>6</strong> Police officers consider cycling without a
                helmet to be a serious danger.
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
                <strong>7</strong> The fine for cycling offences increases
                according to how many previous offences a cyclist has committed.
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

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8–14</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 8–14 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>8</strong> The initial orientation sessions tell
                students how to get{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> in
                Australia.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>9</strong> The health insurance fee is included in each
                student's{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>10</strong> Students must provide details of where they
                are living as{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> of
                their accommodation.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>11</strong> Students are asked to give the university
                their <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                who can be contacted in an urgent situation.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>12</strong> Online booking for medical services is not
                possible because students'{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> must be
                checked.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>13</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                appointments are the only type of medical appointments for which
                students have to pay immediately.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> Students who do not attend appointments
                without giving adequate{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> may be
                charged for them.
              </p>
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
            Write your answers in boxes 15–21 on your answer sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">Work in the Archives Department</h3>
            <p>
              <strong>Type of work:</strong> part-time
            </p>
            <p>
              <strong>Requirements:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 my-2">
              <li>an interest in exploring local history</li>
              <li>
                willingness to work with <strong>15</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> people
              </li>
              <li>
                reasonable computer skills in order to scan documents and manage
                the <strong>16</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> of
                information
              </li>
            </ul>
            <p>
              <strong>Responsibilities:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 my-2">
              <li>
                developing methods of storing information that can be{" "}
                <strong>17</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> more
                easily
              </li>
              <li>setting up and conducting interviews with older residents</li>
            </ul>
            <p>
              <strong>Working days:</strong> minimum of two, preferably
              including <strong>18</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> because
              of training availability
            </p>
            <p>
              <strong>Pay:</strong> hourly wage of £10 plus help with{" "}
              <strong>19</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> costs if
              needed
            </p>
            <p>
              <strong>Educational Level:</strong> must have A levels or{" "}
              <strong>20</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p>
              <strong>Application procedure:</strong> send <strong>21</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to Sarah
              Austin
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 22–27</h3>
          <p className="mb-2">Complete the flow-chart below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN THREE WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 22–27 on your answer sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">Designing a Training Programme</h3>
            <div className="flow-chart">
              <div className="step mb-4">
                <div className="step-number font-bold">Step 1</div>
                <div className="step-content">
                  <p>
                    Identify training aims by meeting the <strong>22</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </p>
                  <p>
                    Find out who will use the material and try to predict{" "}
                    <strong>23</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                    that might occur
                  </p>
                </div>
              </div>

              <div className="step mb-4">
                <div className="step-number font-bold">Step 2</div>
                <div className="step-content">
                  <p>Map out programme stages</p>
                  <ul className="list-disc ml-6">
                    <li>Start with main aims and divide into small steps</li>
                    <li>
                      Decide order of steps by:
                      <ul className="list-circle ml-6">
                        <li>
                          setting out tasks <strong>24</strong>{" "}
                          <Input
                            type="text"
                            className="w-32 mx-1 inline-block"
                          />
                        </li>
                        <li>
                          OR arranging tasks from simple to complex to build{" "}
                          <strong>25</strong>{" "}
                          <Input
                            type="text"
                            className="w-32 mx-1 inline-block"
                          />
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="step mb-4">
                <div className="step-number font-bold">Step 3</div>
                <div className="step-content">
                  <p>
                    Get feedback from <strong>26</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" /> and
                    other interested parties
                  </p>
                </div>
              </div>

              <div className="step mb-4">
                <div className="step-number font-bold">Step 4</div>
                <div className="step-content">
                  <p>Choose training methods</p>
                  <ul className="list-disc ml-6">
                    <li>include different types of activity</li>
                    <li>relate training to real-world examples</li>
                    <li>
                      set out a detailed <strong>27</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      that can be adapted as needed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 3</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28–32</h3>
          <p className="mb-2">
            The text has eight paragraphs, <strong>A–H</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A–H</strong>, in boxes{" "}
            <strong>28–32</strong> on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> an explanation of why alarming information
                may be ineffective
              </p>
              <RadioGroup name="question28" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q28-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q28-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q28-${letter.toLowerCase()}`}
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
                <strong>29</strong> a recommendation that environmental
                organisations should demonstrate their own commitment to certain
                principles
              </p>
              <RadioGroup name="question29" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q29-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q29-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q29-${letter.toLowerCase()}`}
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
                <strong>30</strong> an assertion that some environmental
                organisations are failing to acknowledge that people have
                emotional needs
              </p>
              <RadioGroup name="question30" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q30-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q30-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q30-${letter.toLowerCase()}`}
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
                <strong>31</strong> a description of how political affiliations
                can affect people's views on environmental issues
              </p>
              <RadioGroup name="question31" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q31-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q31-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q31-${letter.toLowerCase()}`}
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
                <strong>32</strong> a list of actions that people can engage in
                to address environmental issues
              </p>
              <RadioGroup name="question32" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q32-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q32-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q32-${letter.toLowerCase()}`}
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
          <h3 className="font-bold mb-2">Questions 33–36</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in <strong>boxes 33–36</strong> on your
            answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>33</strong> Why, according to Paragraph A, has it taken
                governments so long to accept that climate change is happening?
              </p>
              <RadioGroup name="question33" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q33-a" value="A" />
                  <Label htmlFor="q33-a" className="ml-2">
                    A There has not been enough research into the impact of
                    climate change.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-b" value="B" />
                  <Label htmlFor="q33-b" className="ml-2">
                    B Scientists have been reluctant to accept that the climate
                    is changing.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-c" value="C" />
                  <Label htmlFor="q33-c" className="ml-2">
                    C Powerful organisations have tried to influence what the
                    public thinks.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-d" value="D" />
                  <Label htmlFor="q33-d" className="ml-2">
                    D Environmental organisations have been slow to campaign on
                    climate change.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34</strong> According to Paragraph C, which stage in the
                environmental campaigning movement is most recent?
              </p>
              <RadioGroup name="question34" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q34-a" value="A" />
                  <Label htmlFor="q34-a" className="ml-2">
                    A promotion of practical approaches to environmental
                    problems
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-b" value="B" />
                  <Label htmlFor="q34-b" className="ml-2">
                    B providing more scientific information to the general
                    public
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-c" value="C" />
                  <Label htmlFor="q34-c" className="ml-2">
                    C making people feel guilty for damaging the environment
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-d" value="D" />
                  <Label htmlFor="q34-d" className="ml-2">
                    D using fear to encourage urgent action by the public
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35</strong> In Paragraph F, Pat Dade suggests that
                environmental campaigns should tell people how environmental
                protection can
              </p>
              <RadioGroup name="question35" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q35-a" value="A" />
                  <Label htmlFor="q35-a" className="ml-2">
                    A satisfy basic human needs.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-b" value="B" />
                  <Label htmlFor="q35-b" className="ml-2">
                    B unite people with different values.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-c" value="C" />
                  <Label htmlFor="q35-c" className="ml-2">
                    C allow people to act more morally.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-d" value="D" />
                  <Label htmlFor="q35-d" className="ml-2">
                    D reduce the stress of everyday life.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>36</strong> According to Paragraph G, how can
                environmental campaigns be more effective?
              </p>
              <RadioGroup name="question36" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q36-a" value="A" />
                  <Label htmlFor="q36-a" className="ml-2">
                    A by making more use of social values that most people share
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-b" value="B" />
                  <Label htmlFor="q36-b" className="ml-2">
                    B by demonstrating greater sympathy towards people's busy
                    lives
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-c" value="C" />
                  <Label htmlFor="q36-c" className="ml-2">
                    C by having stronger rules for people who damage the
                    environment
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-d" value="D" />
                  <Label htmlFor="q36-d" className="ml-2">
                    D by working with governments to develop environmental
                    legislation
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37–40</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 37–40</strong> on your answer
            sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">
              Communication about climate change
            </h3>
            <p className="mb-2">
              Effective communication about climate change should both appeal to
              people's <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and
              provide them with solutions for dealing with this environmental
              issue.
            </p>
            <p className="mb-2">
              There is little value in producing feelings of <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> or fear,
              as these emotions may result in people ignoring the problem.
              Rather, it is important to make sure that people feel{" "}
              <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in their
              ability to deal with the threat. It is also vital to demonstrate
              that it is possible to avoid <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> through
              taking both personal and group action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge19GRTest4Questions;
