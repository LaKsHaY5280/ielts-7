// Cambridge 18 General Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Cambridge18GRTest1Questions: React.FC = () => {
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
                <strong>1</strong> The garden design course is suitable for
                gardens in rainy climates.
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
                <strong>2</strong> The course is taught in a garden setting.
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
                <strong>3</strong> The course price includes food and drink.
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
                <strong>4</strong> Course participants need to have some
                previous gardening knowledge.
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
                <strong>5</strong> All equipment needed for gardening is
                provided.
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
                <strong>6</strong> The course is suitable for wheelchair users.
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
                <strong>7</strong> People can take their pet dogs to the garden.
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
          <p className="mb-2">
            Look at the following statements and the list of people below.
          </p>
          <p className="mb-2">
            Match each statement with the correct person, A–E.
          </p>
          <p className="mb-4">
            Write the correct letter, A–E, in boxes 8–14 on your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">People</h4>
            <p>
              <strong>A</strong> Andy Parker
            </p>
            <p>
              <strong>B</strong> Martha Kelly
            </p>
            <p>
              <strong>C</strong> Karl Jones
            </p>
            <p>
              <strong>D</strong> Jana White
            </p>
            <p>
              <strong>E</strong> Simon Dale
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>8</strong> says that industry experience can begin with
                unpaid work.
              </p>
              <RadioGroup name="question8" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>9</strong> emphasizes the importance of adapting to
                different styles of performance.
              </p>
              <RadioGroup name="question9" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>10</strong> warns of the need to be able to cope with
                bad working conditions.
              </p>
              <RadioGroup name="question10" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>11</strong> thinks it's helpful to maintain
                relationships with people from one's student days.
              </p>
              <RadioGroup name="question11" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>12</strong> acknowledges that some branches of the
                industry may have gender inequality.
              </p>
              <RadioGroup name="question12" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>13</strong> shows how employment can come about through
                social connections.
              </p>
              <RadioGroup name="question13" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>14</strong> recommends trying to find employment in a
                less well-known part of the industry.
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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

        <h2 className="text-lg font-bold mb-4">SECTION 2</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 15–20</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> from
            the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 15–20 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> The outdoor cinema has been in operation for{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> summer
                seasons.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> Gold Class tickets include unlimited{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> and
                other items.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> Standard ticket holders must avoid bringing{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> because
                it is dangerous.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> Headphones are provided, and viewers must
                leave <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                as security.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> In{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />, all
                film screenings were able to go ahead as planned.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> The management encourages cinema-goers to
                use <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                when coming by car.
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21–27</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 21–27 on your answer sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">MANAGEMENT DEGREES</h3>
            <p className="mb-2">
              <strong>Bachelor of Business Administration (BBA)</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>Gives wide knowledge of business practices</li>
              <li>
                In second and third years, students <strong>21</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> to
                study a particular area
              </li>
              <li>
                May include opportunity for <strong>22</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> to get
                practical experience
              </li>
              <li>
                Teaches skills like creative problem-solving and{" "}
                <strong>23</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                Six months after graduation, about 25% of graduates are working
                in <strong>24</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> or
                related areas
              </li>
            </ul>

            <p className="mb-2">
              <strong>Business Studies with Languages</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>Good preparation for international roles</li>
              <li>
                May include a year in a relevant country with{" "}
                <strong>25</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> in
                international companies
              </li>
            </ul>

            <p className="mb-2">
              <strong>Business Studies with Computer Science</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                Business graduates learn about areas like human resources or{" "}
                <strong>26</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                Leads to careers like business analyst or social media manager
              </li>
            </ul>

            <p className="mb-2">
              <strong>MBA</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>
                For graduates with management <strong>27</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>Can lead to more than doubling of salary</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4">SECTION 3</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28–34</h3>
          <p className="mb-2">
            The text has ten paragraphs, <strong>A–J</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A–J</strong>, in boxes{" "}
            <strong>28–34</strong> on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> a description of how lighthouse authorities
                were established to improve safety at sea
              </p>
              <RadioGroup name="question28" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
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
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> reference to different sources of fuel
                historically used in lighthouses
              </p>
              <RadioGroup name="question29" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
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
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> the reason for the need to provide audio
                warnings to ships
              </p>
              <RadioGroup name="question30" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
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
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> a reference to a structure that might have
                served as a lighthouse but cannot be confirmed
              </p>
              <RadioGroup name="question31" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
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
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>32</strong> a description of how a lighthouse was
                constructed in challenging physical conditions
              </p>
              <RadioGroup name="question32" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
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
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> the continuous requirement for human
                involvement in modern lighthouses
              </p>
              <RadioGroup name="question33" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
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
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34</strong> an explanation of how a technological
                invention helped to identify a lighthouse from a distance
              </p>
              <RadioGroup name="question34" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
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
                  )
                )}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 35–40</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes <strong>35–40</strong> on your answer
            sheet.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border mb-6">
            <h3 className="font-bold mb-2">
              The Evolution of Lighthouse Design
            </h3>
            <p className="mb-4">
              In early times, lighthouses were simply <strong>35</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> or lamps
              on platforms. Later, they evolved into stone towers that were
              positioned at strategic points such as the entrances to ports or
              on sections of <strong>36</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />{" "}
              coastline.
            </p>
            <p className="mb-4">
              Lighthouses needed to be built with <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> walls to
              withstand severe weather. Until the nineteenth century, they were
              usually painted with <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of color
              to make them more visible during daylight hours.
            </p>
            <p className="mb-4">
              In the nineteenth century, August Fresnell invented a special type
              of <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for
              lighthouses. Its design allowed the light to be projected as a
              horizontal <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. Rotating
              the lens created a pattern which helped ships determine their
              position at sea.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge18GRTest1Questions;
