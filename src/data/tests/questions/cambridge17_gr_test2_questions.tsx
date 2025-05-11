import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 17 General Reading Test 2
 */
export const Cambridge17GRTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-5</h3>
          <p className="mb-2">
            Look at the five descriptions of rental property agencies,{" "}
            <strong>A-E</strong>.
          </p>
          <p className="mb-2">
            For which agency are the following statements true?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-E</strong>, in boxes 1-5 on your
            answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>1.</strong> The agency expects customers to provide
                letters of recommendation.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>2.</strong> The agency provides certain information on
                properties held by its competitors.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>3.</strong> The agency began business in its present
                location.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>4.</strong> Employees have specific roles at the agency.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>5.</strong> The agency carefully chooses the property
                owners that it works with.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 6-14</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">In boxes 6-14 on your answer sheet, write</p>
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
                <strong>6.</strong> It is illegal to cycle after sunset without
                bike lights.
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
                <strong>7.</strong> Front and rear lights can be attached to the
                rider.
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

            <div className="question-item">
              <p className="mb-2">
                <strong>8.</strong> A torch worn on a cyclist's head must be
                white.
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
                <strong>9.</strong> There are some legal restrictions on
                flashing lights.
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
                <strong>10.</strong> Reflectors are most commonly available in
                packs of four.
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
                <strong>11.</strong> Reflective heel strips are allowed instead
                of pedal reflectors.
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
                <strong>12.</strong> The law concerning the design of pedals is
                unsatisfactory.
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
                <strong>13.</strong> Cycling during the daytime is safer than
                cycling at night.
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
                <strong>14.</strong> It is against the law to cycle in daytime
                fog without lights.
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
          <h3 className="font-bold mb-2">Questions 15-20</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 15-20 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Furniture</h4>
            <p>Desk size should facilitate</p>
            <ul className="list-disc pl-6 mb-4">
              <li>the flexible arrangement of computer items</li>
              <li>the easy use of a holder for documents</li>
              <li>
                change in the user's <strong>15</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" />
              </li>
            </ul>

            <h4 className="font-bold mb-2">Environment</h4>
            <p>Employers should</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                move, soundproof, or separate noisy equipment using{" "}
                <strong>16</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" />
              </li>
              <li>
                reduce glare from nearby <strong>17</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> e.g.,
                using adjustable blinds
              </li>
              <li>provide suitable lighting</li>
              <li>ensure a comfortable temperature</li>
              <li>
                check <strong>18</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> from
                equipment
              </li>
              <li>check air flow and quality in working area</li>
            </ul>

            <h4 className="font-bold mb-2">Tasks and breaks</h4>
            <p>Employees should have</p>
            <ul className="list-disc pl-6 mb-4">
              <li>a variety of tasks to choose from</li>
              <li>a fair workload</li>
              <li>
                an input into task achievement and <strong>19</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" />
              </li>
              <li>
                regular, short breaks, at times of their own <strong>20</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" />
              </li>
              <li>breaks not located at their workstation</li>
            </ul>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-27</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 21-27 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Safe ladder use</h4>

            <p className="mb-2">
              <strong>21</strong> Employers should keep a{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> of ladder
              safety inspections.
            </p>

            <p className="mb-2">
              <strong>22</strong> Employers should check the{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> of a
              ladder is suitable for the job.
            </p>

            <p className="mb-2">
              <strong>23</strong> The{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> and
              joints of the ladder need particularly close inspection.
            </p>

            <p className="mb-2">
              <strong>24</strong> Make sure the{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> of the
              ladder are resting on a clean, hard surface.
            </p>

            <p className="mb-2">
              <strong>25</strong> Protect the ladder from vehicles by using{" "}
              <Input type="text" className="w-32 inline-block mx-1" />.
            </p>

            <p className="mb-2">
              <strong>26</strong> Use a{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> to keep
              people away from the ladder.
            </p>

            <p className="mb-2">
              <strong>27</strong> Keep the ladder in place using ties, rather
              than <Input type="text" className="w-32 inline-block mx-1" />.
            </p>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 3: Questions 28-40</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28-32</h3>
          <p className="mb-2">The text has seven sections, A-G.</p>
          <p className="mb-2">Which section mentions the following?</p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes 28-32 on
            your answer sheet.
          </p>
          <p className="mb-4">NB You may use any letter more than once.</p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> a suggestion that Fosbury should change his
                way of jumping
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q28-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q28-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> a reference to an opportunity offered to
                Fosbury that made him feel honoured
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q29-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q29-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> a reference to the fact that Fosbury was a
                very influential high jumper
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q30-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q30-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> conflicting explanations given by Fosbury
                for the way the idea for the Fosbury Flop began
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q31-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q31-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>32</strong> a reference to a time when Fosbury was
                dissatisfied with his athletic performance
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={letter} className="flex items-center space-x-1">
                    <RadioGroupItem
                      value={letter}
                      id={`q32-${letter.toLowerCase()}`}
                    />
                    <Label htmlFor={`q32-${letter.toLowerCase()}`}>
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 33-36</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 33-36 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> When interviewed about his development of
                the Fosbury Flop, Dick Fosbury
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q33-a" className="mt-1" />
                  <Label htmlFor="q33-a" className="flex-1">
                    A always insisted that he had carefully designed it on
                    scientific principles.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q33-b" className="mt-1" />
                  <Label htmlFor="q33-b" className="flex-1">
                    B said he wanted to develop a technique that only he could
                    use.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q33-c" className="mt-1" />
                  <Label htmlFor="q33-c" className="flex-1">
                    C claimed it was inspired by an injury he suffered while
                    making a jump.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q33-d" className="mt-1" />
                  <Label htmlFor="q33-d" className="flex-1">
                    D stated that it had been done gradually without any overall
                    plan.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34</strong> Fosbury achieved a sudden improvement in the
                height he could jump when he
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q34-a" className="mt-1" />
                  <Label htmlFor="q34-a" className="flex-1">
                    A started to adapt the 'scissors' technique.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q34-b" className="mt-1" />
                  <Label htmlFor="q34-b" className="flex-1">
                    B became much more determined to win competitions.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q34-c" className="mt-1" />
                  <Label htmlFor="q34-c" className="flex-1">
                    C decided to abandon the 'scissors' technique.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q34-d" className="mt-1" />
                  <Label htmlFor="q34-d" className="flex-1">
                    D found a new way of using the 'belly roll' style.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35</strong> When describing the way that Fosbury's jump
                evolved, Richard Hoffer stressed that
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q35-a" className="mt-1" />
                  <Label htmlFor="q35-a" className="flex-1">
                    A Fosbury's height slowed down his progress.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q35-b" className="mt-1" />
                  <Label htmlFor="q35-b" className="flex-1">
                    B the process was more controlled than it appeared.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q35-c" className="mt-1" />
                  <Label htmlFor="q35-c" className="flex-1">
                    C Fosbury was not really aware of his own technique.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q35-d" className="mt-1" />
                  <Label htmlFor="q35-d" className="flex-1">
                    D the process included specialist input from engineers.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>36</strong> Fosbury defended his idea that his style of
                jumping was 'natural' by pointing out that
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q36-a" className="mt-1" />
                  <Label htmlFor="q36-a" className="flex-1">
                    A it was achievable by younger jumpers.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q36-b" className="mt-1" />
                  <Label htmlFor="q36-b" className="flex-1">
                    B it was copied successfully by other athletes.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q36-c" className="mt-1" />
                  <Label htmlFor="q36-c" className="flex-1">
                    C it was achievable without any special training.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q36-d" className="mt-1" />
                  <Label htmlFor="q36-d" className="flex-1">
                    D it was independently discovered by other athletes.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 37-40 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              How the Fosbury Flop got its name
            </h4>
            <p className="mb-4">
              When first interviewed, Fosbury called his jumping style a{" "}
              <strong>37</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> but he
              realised that this had not made an impression on the{" "}
              <strong>38</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" />. In his
              next interview, he used a name taken from the description given to
              a newspaper photo — and this was the name that everyone noted. He
              says the name was appropriate because his town is near a{" "}
              <strong>39</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> and a{" "}
              <strong>40</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> does a
              similar type of 'flopping' movement when brought to land.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
