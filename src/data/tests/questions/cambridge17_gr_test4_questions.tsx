import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 17 General Reading Test 4
 */
export const Cambridge17GRTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-7</h3>
          <p className="mb-2">The text has six advertisements, A-F.</p>
          <p className="mb-2">Which advertisement mentions the following?</p>
          <p className="mb-4">
            Write the correct letter, <strong>A-F</strong>, in boxes 1-7 on your
            answer sheet.
          </p>
          <p className="mb-4">NB You may use any letter more than once.</p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>1</strong> running in the evening
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q1-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q1-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>2</strong> seeing newborn animals
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q2-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q2-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>3</strong> parents and children doing different
                activities at the same time
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q3-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q3-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>4</strong> choosing from alternative routes
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q4-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q4-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>5</strong> learning about how other people help animals
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q5-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q5-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>6</strong> an event occurring only at a certain time of
                the year
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q6-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q6-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>7</strong> identifying where animals have been
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q7-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q7-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8-14</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">In boxes 8-14 on your answer sheet, write</p>
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
                <strong>8</strong> Some sixth-form students intend to start work
                immediately after leaving school.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q8-true" />
                  <Label htmlFor="q8-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q8-false" />
                  <Label htmlFor="q8-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q8-ng" />
                  <Label htmlFor="q8-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>9</strong> An increasing number of students are accepted
                at medical school.
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
                <strong>10</strong> Most sixth-form students come from other
                schools.
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
                <strong>11</strong> External applicants have an interview before
                they can be accepted.
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
                <strong>12</strong> Applications to the sixth form can only be
                made through the MyChoice16 website.
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
                <strong>13</strong> External applicants can talk to current
                students at the Open Evening.
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

            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> Students meet their tutor whenever one of
                them requests a meeting.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q14-true" />
                  <Label htmlFor="q14-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q14-false" />
                  <Label htmlFor="q14-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q14-ng" />
                  <Label htmlFor="q14-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 2: Questions 15-27</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 15-21</h3>
          <p className="mb-2">Complete the flowchart below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 15-21 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Cutting down a big tree</h4>

            <p className="mb-2">
              The site supervisor checks the paperwork and the latest
              information on the weather first.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              Chainsaws, clothing, and all <strong>15</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> are then
              loaded onto the lorry.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              The team talk briefly at the site about the overall{" "}
              <strong>16</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> before
              the work begins.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              The climber's anchor point must have the necessary height and{" "}
              <strong>17</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> for the
              job.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              The first branches are cut and placed in a pile in the yard.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              A pulley and some <strong>18</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> assist in
              the removal of the top branches.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              At this point, signs are placed on the <strong>19</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" />.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              For safety, the actions of both the tree cutter and{" "}
              <strong>20</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> must be
              regularly checked.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              A special machine creates <strong>21</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> out of
              some of the wood.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 22-27</h3>
          <p className="mb-2">Complete the table below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 22-27 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">The work of plumbers</h4>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Type of plumber</th>
                  <th className="border p-2 text-left">Work-related issues</th>
                  <th className="border p-2 text-left">
                    Skills/Actions needed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Residential</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>
                        Working underfloor in a <strong>22</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />{" "}
                        area
                      </li>
                      <li>Dealing with a wood product</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Plan carefully</li>
                      <li>
                        Always use the appropriate <strong>23</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />{" "}
                        for each tool
                      </li>
                      <li>
                        Consider how different <strong>24</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />{" "}
                        will be affected
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Commercial</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>
                        Working with advanced equipment designed for integrated
                        systems
                      </li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Fully comprehend instructions</li>
                      <li>
                        Take images of structures to locate important materials
                        like <strong>25</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Service</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>Diagnosing problems and their causes</li>
                      <li>
                        Fully understanding something someone else installed,
                        e.g., a shower unit
                      </li>
                      <li>
                        Providing quick, <strong>26</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />{" "}
                        solutions
                      </li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>
                        Deal well with people who have a lot of{" "}
                        <strong>27</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />{" "}
                        or disruption as a result of their problems
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 3: Questions 28-40</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28-31</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 28-31 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              The procedure for the dormouse reintroduction in Wensleydale
            </h4>

            <p className="mb-4">
              It was necessary to do some preparation before the 40 dormice
              could be released in Wensleydale. First, members of the PTES had
              to choose a suitable wooded area for them. Then{" "}
              <strong>28</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> gave them
              a thorough check. The team divided the animals into{" "}
              <strong>29</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> before
              introducing them to their temporary tree homes. These were boxes
              which were enclosed by cages. Initially, the dormice could not get
              out, but the team brought <strong>30</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> on a
              regular basis.
            </p>

            <p className="mb-4">
              Once the dormice got used to their new environment, a gap was cut
              in the netting so they could go out and return when they wanted.
              Then, before the animals were ready to start their annual{" "}
              <strong>31</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in the
              autumn, the team took their temporary homes away; they intend to
              return and review the success of the project next year.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 32-36 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>32</strong> Ian White says that one aim of releasing 40
                dormice in Wensleydale is to
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q32-a" className="mt-1" />
                  <Label htmlFor="q32-a" className="flex-1">
                    A allow the public to observe the animals in the future.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q32-b" className="mt-1" />
                  <Label htmlFor="q32-b" className="flex-1">
                    B test whether the area is sufficient for a large group.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q32-c" className="mt-1" />
                  <Label htmlFor="q32-c" className="flex-1">
                    C experiment with new methods of caring for them.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q32-d" className="mt-1" />
                  <Label htmlFor="q32-d" className="flex-1">
                    D get the group to mix with others that live nearby.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> Coppicing is mentioned in the fourth
                paragraph as an example of
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q33-a" className="mt-1" />
                  <Label htmlFor="q33-a" className="flex-1">
                    A how changes in their natural habitat have affected
                    dormouse numbers.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q33-b" className="mt-1" />
                  <Label htmlFor="q33-b" className="flex-1">
                    B what was often done in woodland in the past to help
                    dormice survive.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q33-c" className="mt-1" />
                  <Label htmlFor="q33-c" className="flex-1">
                    C the relative importance of woodland and hedges in the
                    countryside.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q33-d" className="mt-1" />
                  <Label htmlFor="q33-d" className="flex-1">
                    D the particular types of trees that grow best in the
                    English climate.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34</strong> Why does Ian White support the widespread
                reintroduction of dormice?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q34-a" className="mt-1" />
                  <Label htmlFor="q34-a" className="flex-1">
                    A They are animals that can easily be bred in captivity.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q34-b" className="mt-1" />
                  <Label htmlFor="q34-b" className="flex-1">
                    B The steps taken to help them will also benefit many other
                    animals.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q34-c" className="mt-1" />
                  <Label htmlFor="q34-c" className="flex-1">
                    C The public will be more likely to go for walks in woods
                    and fields.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q34-d" className="mt-1" />
                  <Label htmlFor="q34-d" className="flex-1">
                    D They are animals that should particularly attract younger
                    children.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35</strong> What does Helen Meech hope that the dormice
                project will lead to?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q35-a" className="mt-1" />
                  <Label htmlFor="q35-a" className="flex-1">
                    A an increase in the populations of the most common species
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q35-b" className="mt-1" />
                  <Label htmlFor="q35-b" className="flex-1">
                    B a public who are used to sharing their environment with
                    wildlife
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q35-c" className="mt-1" />
                  <Label htmlFor="q35-c" className="flex-1">
                    C a general awareness of the need to reintroduce larger
                    animals soon
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q35-d" className="mt-1" />
                  <Label htmlFor="q35-d" className="flex-1">
                    D a willingness to spend time improving natural landscapes
                    in the UK
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>36</strong> What is suggested about wolves returning to
                the UK?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q36-a" className="mt-1" />
                  <Label htmlFor="q36-a" className="flex-1">
                    A The best solution would be to keep them in a secure
                    wildlife park.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q36-b" className="mt-1" />
                  <Label htmlFor="q36-b" className="flex-1">
                    B They would definitely need to be kept far away from
                    humans.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q36-c" className="mt-1" />
                  <Label htmlFor="q36-c" className="flex-1">
                    C There is only one area of the UK which would accept them.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q36-d" className="mt-1" />
                  <Label htmlFor="q36-d" className="flex-1">
                    D Their presence could revive some damaged environments.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">
            Look at the following statements (Questions 37-40) and the list of
            animals below.
          </p>
          <p className="mb-2">
            Match each statement with the correct animal, A-E.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-E</strong>, in boxes 37-40 on
            your answer sheet.
          </p>

          <div className="border p-4 mb-6 flex flex-row gap-8">
            <div className="w-1/3">
              <h4 className="font-bold mb-2">List of Animals</h4>
              <p>
                <strong>A</strong> The lynx
              </p>
              <p>
                <strong>B</strong> The beaver
              </p>
              <p>
                <strong>C</strong> The wolf
              </p>
              <p>
                <strong>D</strong> The sea eagle
              </p>
              <p>
                <strong>E</strong> The wild boar
              </p>
            </div>
            <div className="w-2/3">
              <div className="space-y-4">
                <div className="question-item">
                  <p className="mb-2">
                    <strong>37</strong> This species has already begun to settle
                    in the UK without human assistance.
                  </p>
                  <RadioGroup className="flex flex-row space-x-2">
                    {["A", "B", "C", "D", "E"].map((letter) => (
                      <div key={letter} className="flex items-center space-x-1">
                        <RadioGroupItem
                          value={letter}
                          id={`q37-${letter.toLowerCase()}`}
                        />
                        <Label htmlFor={`q37-${letter.toLowerCase()}`}>
                          {letter}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="question-item">
                  <p className="mb-2">
                    <strong>38</strong> This species would be particularly
                    suitable for reintroduction as it is unlikely to try to come
                    into contact with people.
                  </p>
                  <RadioGroup className="flex flex-row space-x-2">
                    {["A", "B", "C", "D", "E"].map((letter) => (
                      <div key={letter} className="flex items-center space-x-1">
                        <RadioGroupItem
                          value={letter}
                          id={`q38-${letter.toLowerCase()}`}
                        />
                        <Label htmlFor={`q38-${letter.toLowerCase()}`}>
                          {letter}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="question-item">
                  <p className="mb-2">
                    <strong>39</strong> It is possible that reintroducing this
                    species could bring considerable financial benefits to one
                    area.
                  </p>
                  <RadioGroup className="flex flex-row space-x-2">
                    {["A", "B", "C", "D", "E"].map((letter) => (
                      <div key={letter} className="flex items-center space-x-1">
                        <RadioGroupItem
                          value={letter}
                          id={`q39-${letter.toLowerCase()}`}
                        />
                        <Label htmlFor={`q39-${letter.toLowerCase()}`}>
                          {letter}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="question-item">
                  <p className="mb-2">
                    <strong>40</strong> Some countries which have already
                    reintroduced this species have systems to repay farmers if
                    it kills any of their animals.
                  </p>
                  <RadioGroup className="flex flex-row space-x-2">
                    {["A", "B", "C", "D", "E"].map((letter) => (
                      <div key={letter} className="flex items-center space-x-1">
                        <RadioGroupItem
                          value={letter}
                          id={`q40-${letter.toLowerCase()}`}
                        />
                        <Label htmlFor={`q40-${letter.toLowerCase()}`}>
                          {letter}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
