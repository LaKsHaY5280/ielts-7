import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 17 General Reading Test 3
 */
export const Cambridge17GRTest3Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-6</h3>
          <p className="mb-2">
            Look at the five descriptions of walks, <strong>A-E</strong>.
          </p>
          <p className="mb-2">
            For which walk are the following statements true?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-E</strong>, in boxes 1-6 on your
            answer sheet.
          </p>
          <p className="mb-4">NB You may use any letter more than once.</p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>1</strong> There is very little shade.
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
                <strong>2</strong> There are some steep sections.
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
                <strong>3</strong> There is a choice of route on this walk.
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
                <strong>4</strong> There is a special site for watching
                wildlife.
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
                <strong>5</strong> Dogs must not be allowed to run freely.
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

            <div className="question-item">
              <p className="mb-2">
                <strong>6</strong> You can sit down in several places.
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 7-14</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">In boxes 7-14 on your answer sheet, write</p>
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
                <strong>7</strong> Sally Hanugoldi is still renting a property
                with Poppi Properties.
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
                <strong>8</strong> Sally Hanugoldi was the first person to view
                the flat.
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
                <strong>9</strong> Sally made a quick decision to rent the
                property.
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
                <strong>10</strong> The flat was on a lower level than Sally had
                expected.
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
                <strong>11</strong> Lillee's behaviour towards Sally changed
                over time.
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
                <strong>12</strong> The flat that Sally rented from Poppi
                Properties was unfurnished.
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
                <strong>13</strong> Sally employed someone to clean her carpets.
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
                <strong>14</strong> The landlord raised Sally's rent while she
                was living in the flat.
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
            Choose <strong>ONE WORD AND/OR A NUMBER</strong> from the text for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 15-21 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Raising a grievance at work</h4>

            <p className="mb-2">
              Ask to see your immediate manager on an <strong>15</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> basis.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              If not satisfied, find details of your company's grievance
              procedure.
            </p>
            <p className="mb-2">
              This may be in a handbook, a <strong>16</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> or on an
              HR intranet site.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              Write to your employer with details of your complaint.
            </p>
            <p className="mb-2">
              You may also suggest a <strong>17</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" />
            </p>
            <p className="mb-2">
              Make sure there is a date on your letter and keep a copy.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">Your employer should hold a meeting.</p>
            <p className="mb-2">
              You have the right to be accompanied by a <strong>18</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> or a
              trade union representative.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              Your employer should then inform you of the decision in writing.
            </p>
            <p className="mb-2">
              If you are not happy with the decision, you can appeal in writing.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              Your employer should then arrange a further meeting.
            </p>
            <p className="mb-2">
              Where possible, this should be led by a manager who is{" "}
              <strong>19</strong>{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> to the
              previous one.
            </p>

            <p className="mb-2 text-center">↓</p>

            <p className="mb-2">
              If you are still not happy with the decision, you can
            </p>
            <ul className="list-disc pl-6">
              <li>
                think about the possibility of <strong>20</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" />
              </li>
              <li>
                make an employment tribunal claim. This must be done within{" "}
                <strong>21</strong>{" "}
                <Input type="text" className="w-32 inline-block mx-1" /> of the
                date of the event.
              </li>
            </ul>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 22-27</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 22-27 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> Private hire drivers only take passengers by
                arrangement with an{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>23</strong> A driver's job may involve helping those
                with <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                problems.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>24</strong> Working hours for drivers may vary, but the
                greatest demand is in the{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>25</strong> The majority of drivers are{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>26</strong> A driver needs to be familiar with the{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> of the
                area.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> It may be useful if a driver has evidence of
                some <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                ability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 3: Questions 28-40</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28-33</h3>
          <p className="mb-2">
            The text has six paragraphs, <strong>A-F</strong>.
          </p>
          <p className="mb-2">
            Choose the correct heading for each paragraph from the list of
            headings below.
          </p>
          <p className="mb-4">
            Write the correct number, <strong>i-vii</strong>, in boxes 28-33 on
            your answer sheet.
          </p>

          <div className="mb-4">
            <h4 className="font-bold">List of Headings</h4>
            <p>
              <strong>i</strong> The extra time is worth it
            </p>
            <p>
              <strong>ii</strong> The preferred rhubarb for consumers
            </p>
            <p>
              <strong>iii</strong> Yorkshire's declining air quality
            </p>
            <p>
              <strong>iv</strong> Observing the selection process
            </p>
            <p>
              <strong>v</strong> Suggesting a possible beginning
            </p>
            <p>
              <strong>vi</strong> A long-standing family business
            </p>
            <p>
              <strong>vii</strong> The best region for forced rhubarb
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> Paragraph A
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii"].map((number) => (
                  <div key={number} className="flex items-center space-x-1">
                    <RadioGroupItem value={number} id={`q28-${number}`} />
                    <Label htmlFor={`q28-${number}`}>{number}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> Paragraph B
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii"].map((number) => (
                  <div key={number} className="flex items-center space-x-1">
                    <RadioGroupItem value={number} id={`q29-${number}`} />
                    <Label htmlFor={`q29-${number}`}>{number}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> Paragraph C
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii"].map((number) => (
                  <div key={number} className="flex items-center space-x-1">
                    <RadioGroupItem value={number} id={`q30-${number}`} />
                    <Label htmlFor={`q30-${number}`}>{number}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> Paragraph D
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii"].map((number) => (
                  <div key={number} className="flex items-center space-x-1">
                    <RadioGroupItem value={number} id={`q31-${number}`} />
                    <Label htmlFor={`q31-${number}`}>{number}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>32</strong> Paragraph E
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii"].map((number) => (
                  <div key={number} className="flex items-center space-x-1">
                    <RadioGroupItem value={number} id={`q32-${number}`} />
                    <Label htmlFor={`q32-${number}`}>{number}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> Paragraph F
              </p>
              <RadioGroup className="flex flex-row space-x-2 flex-wrap">
                {["i", "ii", "iii", "iv", "v", "vi", "vii"].map((number) => (
                  <div key={number} className="flex items-center space-x-1">
                    <RadioGroupItem value={number} id={`q33-${number}`} />
                    <Label htmlFor={`q33-${number}`}>{number}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 34-36</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 34-36 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>34</strong> What aspect of forced rhubarb does the
                writer praise in Paragraph C?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q34-a" className="mt-1" />
                  <Label htmlFor="q34-a" className="flex-1">
                    A its suitability for pies
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q34-b" className="mt-1" />
                  <Label htmlFor="q34-b" className="flex-1">
                    B the smoothness of its stems
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q34-c" className="mt-1" />
                  <Label htmlFor="q34-c" className="flex-1">
                    C its superiority over other types of rhubarb
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q34-d" className="mt-1" />
                  <Label htmlFor="q34-d" className="flex-1">
                    D the number of places it can be successfully grown
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35</strong> Why does the writer think forced rhubarb has
                become more popular among cooking experts?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q35-a" className="mt-1" />
                  <Label htmlFor="q35-a" className="flex-1">
                    A It is cheap and easy to grow.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q35-b" className="mt-1" />
                  <Label htmlFor="q35-b" className="flex-1">
                    B It is attractive and pleasant to eat.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q35-c" className="mt-1" />
                  <Label htmlFor="q35-c" className="flex-1">
                    C Local farmers are producing more of it.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q35-d" className="mt-1" />
                  <Label htmlFor="q35-d" className="flex-1">
                    D Imported varieties are in limited supply.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>36</strong> In the final paragraph, the writer suggests
                that forced rhubarb was first produced
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q36-a" className="mt-1" />
                  <Label htmlFor="q36-a" className="flex-1">
                    A by accident.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q36-b" className="mt-1" />
                  <Label htmlFor="q36-b" className="flex-1">
                    B as animal feed.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q36-c" className="mt-1" />
                  <Label htmlFor="q36-c" className="flex-1">
                    C through trial and error.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q36-d" className="mt-1" />
                  <Label htmlFor="q36-d" className="flex-1">
                    D while growing something else.
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
            Choose <strong>ONE WORD ONLY</strong> from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 37-40 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Growing forced rhubarb</h4>

            <p className="mb-4">
              During November, rhubarb crowns are removed from the soil and
              replanted in dark sheds that have plenty of heating. These
              conditions encourage such fast growth that the buds make a{" "}
              <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> sound as
              the pink stalks appear. The growing period lasts around three
              weeks. After that, the rhubarb can be picked by a group of people
              known as <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. They use
              a <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to
              inspect the stems and to make sure they are as long as a human{" "}
              <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> before
              handling them with expert skill.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
