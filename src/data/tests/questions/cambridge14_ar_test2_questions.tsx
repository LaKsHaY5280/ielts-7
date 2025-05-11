// Cambridge 14 Academic Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 14 Academic Reading Test 2
 */
export const Cambridge14ARTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-8</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 1-8 on your answer sheet, write</p>
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

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1.</strong> Henderson rarely visited the area around
                Press estate when he was younger.
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
                  <RadioGroupItem id="q1-ng" value="NOT GIVEN" />
                  <Label htmlFor="q1-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2.</strong> Henderson pursued a business career because
                it was what his family wanted.
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
                  <RadioGroupItem id="q2-ng" value="NOT GIVEN" />
                  <Label htmlFor="q2-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3.</strong> Henderson and Notman were surprised by the
                results of their 1865 experiment.
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
                  <RadioGroupItem id="q3-ng" value="NOT GIVEN" />
                  <Label htmlFor="q3-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>4.</strong> There were many similarities between
                Henderson's early landscapes and those of Notman.
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
                  <RadioGroupItem id="q4-ng" value="NOT GIVEN" />
                  <Label htmlFor="q4-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>5.</strong> The studio that Henderson opened in 1866 was
                close to his home.
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
                  <RadioGroupItem id="q5-ng" value="NOT GIVEN" />
                  <Label htmlFor="q5-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>6.</strong> Henderson gave up portraiture so that he
                could focus on taking photographs of scenery.
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
                  <RadioGroupItem id="q6-ng" value="NOT GIVEN" />
                  <Label htmlFor="q6-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>7.</strong> When Henderson began work for the
                Intercolonial Railway, the Montreal to Halifax line had been
                finished.
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
                  <RadioGroupItem id="q7-ng" value="NOT GIVEN" />
                  <Label htmlFor="q7-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>8.</strong> Henderson's last work as a photographer was
                with the Canadian Pacific Railway.
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
                  <RadioGroupItem id="q8-ng" value="NOT GIVEN" />
                  <Label htmlFor="q8-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">Complete the notes below</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes <strong>9-13</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Alexander Henderson</h4>

            <h5 className="font-bold mt-4 mb-2">Early life</h5>
            <p className="mb-1">
              – was born in Scotland in 1831 – father was a <strong>9</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-3">
              – trained as an accountant, emigrated to Canada in 1855
            </p>

            <h5 className="font-bold mt-4 mb-2">
              Start of a photographic career
            </h5>
            <p className="mb-1">– opened up a photographic studio in 1866</p>
            <p className="mb-1">
              – took photos of city life, but preferred landscape photography
            </p>
            <p className="mb-1">
              – people bought Henderson's photos because photography took up
              considerable
            </p>
            <p className="mb-1">
              – time and the <strong>10</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> was heavy
            </p>
            <p className="mb-3">
              – the photographs Henderson sold were <strong>11</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> or
              souvenirs
            </p>

            <h5 className="font-bold mt-4 mb-2">
              Travelling as a professional photographer
            </h5>
            <p className="mb-1">
              – travelled widely in Quebec and Ontario in 1870s and 1880s
            </p>
            <p className="mb-1">
              – took many trips along eastern rivers in a <strong>12</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-1">
              – worked for Canadian railways between 1875 and 1897
            </p>
            <p className="mb-3">
              – worked for CPR in 1885 and photographed the <strong>13</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and the
              railway at Rogers Pass
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-18</h3>
          <p className="mb-2">
            Reading Passage 2 has nine sections, <strong>A-I</strong>
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-I</strong>, in{" "}
            <strong>boxes 14-18</strong> on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> why some people avoided hospitals in the
                19th century
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q14-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q14-${letter}`} value={letter} />
                    <Label htmlFor={`q14-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>15.</strong> a suggestion that the popularity of tall
                buildings is linked to prestige
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q15-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q15-${letter}`} value={letter} />
                    <Label htmlFor={`q15-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>16.</strong> a comparison between the circulation of air
                in a 19th-century building and modern standards
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q16-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q16-${letter}`} value={letter} />
                    <Label htmlFor={`q16-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>17.</strong> how Short tested the circulation of air in
                a 19th-century building
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q17-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q17-${letter}`} value={letter} />
                    <Label htmlFor={`q17-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>18.</strong> an implication that advertising led to the
                large increase in the use of air conditioning
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q18-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q18-${letter}`} value={letter} />
                    <Label htmlFor={`q18-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 19-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 19-26</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Ventilation in 19th-century hospital wards
            </h4>

            <p className="mb-4">
              Professor Alan Short examined the work of John Shaw Billings, who
              influenced the architectural <strong>19</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of
              hospitals to ensure they had good ventilation. He calculated that{" "}
              <strong>20</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in the
              air coming from patients suffering form <strong>21</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> would not
              have harmed other patients. He also found that the air in{" "}
              <strong>22</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in
              hospitals could change as often as in a modern operating theatre.
              He suggests that energy use could be reduced by locating more
              patients in <strong>23</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> areas. A
              major reason for improving ventilation in 19th-century hospitals
              was the demand from the <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for
              protection against bad air, known as <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. These
              were blamed for the spread of disease for hundreds of years,
              including epidemics of <strong>26</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in London
              and Paris in the middle of the 19th century.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-34</h3>
          <p className="mb-2">
            Reading Passage 3 has eight sections, <strong>A-H</strong>
          </p>
          <p className="mb-2">
            Choose the correct heading for each section from the list of
            headings below.
          </p>
          <p className="mb-4">
            Write the correct number, <strong>i-ix</strong>, in{" "}
            <strong>boxes 27-34</strong> on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">List of Headings</h4>
            <p className="mb-1">
              <strong>i</strong> Complaints about the impact of a certain
              approach
            </p>
            <p className="mb-1">
              <strong>ii</strong> Fundamental beliefs that are in fact incorrect
            </p>
            <p className="mb-1">
              <strong>iii</strong> Early recommendations concerning business
              activities
            </p>
            <p className="mb-1">
              <strong>iv</strong> Organisations that put a new approach into
              practice
            </p>
            <p className="mb-1">
              <strong>v</strong> Companies that have suffered from changing
              their approach
            </p>
            <p className="mb-1">
              <strong>vi</strong> What people are increasingly expected to do
            </p>
            <p className="mb-1">
              <strong>vii</strong> How to achieve outcomes that are currently
              impossible
            </p>
            <p className="mb-1">
              <strong>viii</strong> Neither approach guarantees continuous
              improvement
            </p>
            <p className="mb-1">
              <strong>ix</strong> Evidence that a certain approach can have more
              disadvantages that advantages
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> Section A
              </p>
              <RadioGroup name="question27" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q27-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q27-${option}`} value={option} />
                      <Label htmlFor={`q27-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> Section B
              </p>
              <RadioGroup name="question28" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q28-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q28-${option}`} value={option} />
                      <Label htmlFor={`q28-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> Section C
              </p>
              <RadioGroup name="question29" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q29-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q29-${option}`} value={option} />
                      <Label htmlFor={`q29-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> Section D
              </p>
              <RadioGroup name="question30" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q30-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q30-${option}`} value={option} />
                      <Label htmlFor={`q30-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> Section E
              </p>
              <RadioGroup name="question31" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q31-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q31-${option}`} value={option} />
                      <Label htmlFor={`q31-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>32.</strong> Section F
              </p>
              <RadioGroup name="question32" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q32-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q32-${option}`} value={option} />
                      <Label htmlFor={`q32-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> Section G
              </p>
              <RadioGroup name="question33" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q33-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q33-${option}`} value={option} />
                      <Label htmlFor={`q33-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> Section H
              </p>
              <RadioGroup name="question34" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"].map(
                  (option) => (
                    <div key={`q34-${option}`} className="flex items-center">
                      <RadioGroupItem id={`q34-${option}`} value={option} />
                      <Label htmlFor={`q34-${option}`} className="ml-2">
                        {option}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 35-37</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 35-37</strong> on your answer
            sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> Numerous training sessions are aimed at
                people who feel they are not{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> enough.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>36.</strong> Being organised appeals to people who
                regard themselves as{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> Many people feel{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> with
                aspects of their work.
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 38-40</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 3?
          </p>
          <p className="mb-2">
            In <strong>boxes 38-40</strong> on your answer sheet, write
          </p>
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

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>38.</strong> Both businesses and people aim at order
                without really considering its value.
              </p>
              <RadioGroup name="question38" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-true" value="TRUE" />
                  <Label htmlFor="q38-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-false" value="FALSE" />
                  <Label htmlFor="q38-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-ng" value="NOT GIVEN" />
                  <Label htmlFor="q38-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39.</strong> Innovation is most successful if the people
                involved have distinct roles.
              </p>
              <RadioGroup name="question39" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-true" value="TRUE" />
                  <Label htmlFor="q39-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-false" value="FALSE" />
                  <Label htmlFor="q39-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-ng" value="NOT GIVEN" />
                  <Label htmlFor="q39-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>40.</strong> Google was inspired to adopt flexibility by
                the success of General Electric.
              </p>
              <RadioGroup name="question40" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-true" value="TRUE" />
                  <Label htmlFor="q40-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-false" value="FALSE" />
                  <Label htmlFor="q40-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-ng" value="NOT GIVEN" />
                  <Label htmlFor="q40-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge14ARTest2Questions;
