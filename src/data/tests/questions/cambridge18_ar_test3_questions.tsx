import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 18 Academic Reading Test 3
 */
export const Cambridge18ARTest3Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-4</h3>
          <p className="mb-2">
            Reading Passage 1 has eight sections, <strong>A-H</strong>.
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-H</strong>, in boxes 1-4 on your
            answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>1</strong> an explanation of the industrial processes
                that create potential raw materials for concrete
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-1 mr-4"
                  >
                    <RadioGroupItem value={option} id={`q1-${option}`} />
                    <Label htmlFor={`q1-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>2</strong> a reference to the various locations where
                high-rise wooden buildings can be found
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-1 mr-4"
                  >
                    <RadioGroupItem value={option} id={`q2-${option}`} />
                    <Label htmlFor={`q2-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>3</strong> an indication of how widely available the raw
                materials of concrete are
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-1 mr-4"
                  >
                    <RadioGroupItem value={option} id={`q3-${option}`} />
                    <Label htmlFor={`q3-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>4</strong> the belief that more high-rise wooden
                buildings are needed before wood can be regarded as a viable
                construction material
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E", "F", "G", "H"].map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-1 mr-4"
                  >
                    <RadioGroupItem value={option} id={`q4-${option}`} />
                    <Label htmlFor={`q4-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 5-8</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 5-8 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Making buildings with wood</h4>
            <p className="mb-4">
              Wood is a traditional building material, but current environmental
              concerns are encouraging <strong>5</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to use
              wood in modern construction projects. Using wood, however, has its
              challenges. For example, as <strong>6</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in the
              atmosphere enters wood, it increases in size. In addition, wood is
              prone to pests and the risk of fire is greater. However, wood can
              be turned into a better construction material if it is treated and
              combined with other materials. In one process, <strong>7</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of solid
              wood are glued together to create building blocks. These blocks
              are lighter than concrete and steel but equal them in strength.
              Experts say that wooden buildings are an improvement on those made
              of concrete and steel in terms of the <strong>8</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> with
              which they can be constructed and how much noise is generated by
              the process.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">
            Match each statement with the correct person, <strong>A</strong>,{" "}
            <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>, in boxes 9-13 on your
            answer sheet.
          </p>
          <p className="mb-2">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-4">
            <p className="mb-1">
              <strong>List of People</strong>
            </p>
            <p className="mb-1">
              <strong>A</strong> Chris Cheeseman
            </p>
            <p className="mb-1">
              <strong>B</strong> Markus Mannstrom
            </p>
            <p className="mb-1">
              <strong>C</strong> Anna Surgenor
            </p>
            <p className="mb-1">
              <strong>D</strong> Felix Preston and Johanna Lehne
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>9</strong> The environmental advantage of cement
                alternatives may not be as great as initially assumed.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q9-${option}`} />
                    <Label htmlFor={`q9-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>10</strong> It would be hard to create a construction
                alternative to concrete that offers so many comparable benefits.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q10-${option}`} />
                    <Label htmlFor={`q10-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>11</strong> Worries about the environment have led to
                increased interest in wood as a construction material.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q11-${option}`} />
                    <Label htmlFor={`q11-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>12</strong> Expense has been a factor in the negative
                response to the development of new cements.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q12-${option}`} />
                    <Label htmlFor={`q12-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>13</strong> The environmental damage caused by concrete
                is due to it being produced in large quantities.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q13-${option}`} />
                    <Label htmlFor={`q13-${option}`}>{option}</Label>
                  </div>
                ))}
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
          <h3 className="font-bold mb-2">Questions 14-20</h3>
          <p className="mb-2">
            Reading Passage 2 has seven paragraphs, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Choose the correct heading for each paragraph from the list of
            headings below.
          </p>
          <p className="mb-4">
            Write the correct number, <strong>i-viii</strong>, in boxes 14-20 on
            your answer sheet.
          </p>

          <div className="mb-4">
            <p className="mb-1">
              <strong>List of Headings</strong>
            </p>
            <p className="mb-1">
              <strong>i</strong> A period in cold conditions before the
              technology is assessed
            </p>
            <p className="mb-1">
              <strong>ii</strong> Marketing issues lead to failure
            </p>
            <p className="mb-1">
              <strong>iii</strong> Good and bad aspects of steam technology are
              passed on
            </p>
            <p className="mb-1">
              <strong>iv</strong> A possible solution to the issues of today
            </p>
            <p className="mb-1">
              <strong>v</strong> Further improvements lead to commercial orders
            </p>
            <p className="mb-1">
              <strong>vi</strong> Positive publicity at last for this quiet,
              clean, fast vehicle
            </p>
            <p className="mb-1">
              <strong>vii</strong> A disappointing outcome for customers
            </p>
            <p className="mb-1">
              <strong>viii</strong> A better option than the steam car arises
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> Paragraph A
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q14-${option}`} />
                      <Label htmlFor={`q14-${option}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> Paragraph B
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q15-${option}`} />
                      <Label htmlFor={`q15-${option}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> Paragraph C
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q16-${option}`} />
                      <Label htmlFor={`q16-${option}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> Paragraph D
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q17-${option}`} />
                      <Label htmlFor={`q17-${option}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> Paragraph E
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q18-${option}`} />
                      <Label htmlFor={`q18-${option}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> Paragraph F
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q19-${option}`} />
                      <Label htmlFor={`q19-${option}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> Paragraph G
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`q20-${option}`} />
                      <Label htmlFor={`q20-${option}`}>{option}</Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-23</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 21-23 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> What point does the writer make about the
                steam car in Paragraph B?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q21-a" className="mt-1" />
                  <Label htmlFor="q21-a" className="flex-1">
                    A Its success was short-lived.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q21-b" className="mt-1" />
                  <Label htmlFor="q21-b" className="flex-1">
                    B Not enough cars were made.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q21-c" className="mt-1" />
                  <Label htmlFor="q21-c" className="flex-1">
                    C Car companies found them hard to sell.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q21-d" className="mt-1" />
                  <Label htmlFor="q21-d" className="flex-1">
                    D People found them hard to drive.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> When building their first steam car, the
                Doble brothers
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q22-a" className="mt-1" />
                  <Label htmlFor="q22-a" className="flex-1">
                    A constructed all the parts themselves.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q22-b" className="mt-1" />
                  <Label htmlFor="q22-b" className="flex-1">
                    B made written notes at each stage of the construction.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q22-c" className="mt-1" />
                  <Label htmlFor="q22-c" className="flex-1">
                    C needed several attempts to achieve a competitive model.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q22-d" className="mt-1" />
                  <Label htmlFor="q22-d" className="flex-1">
                    D sought the advice of experienced people in the car
                    industry.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>23</strong> In order to produce the Model C, the Doble
                brothers
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q23-a" className="mt-1" />
                  <Label htmlFor="q23-a" className="flex-1">
                    A moved production to a different city.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q23-b" className="mt-1" />
                  <Label htmlFor="q23-b" className="flex-1">
                    B raised financial capital.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q23-c" className="mt-1" />
                  <Label htmlFor="q23-c" className="flex-1">
                    C employed an additional worker.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q23-d" className="mt-1" />
                  <Label htmlFor="q23-d" className="flex-1">
                    D abandoned their earlier designs.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 24-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD AND/OR A NUMBER</strong> from the passage
            for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 24-26 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">The Model E</h4>
            <p className="mb-4">
              The Model E was road-tested in 1924 by the Automobile Club of
              America. They found it easy to drive, despite its weight, and it
              impressed the spectators. A later version of the Model E raised
              its <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, while
              keeping its emissions extremely low.
            </p>
            <p className="mb-4">
              The steam car was too expensive for many people and its design was
              constantly being altered. Under <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> cars were
              produced before the company went out of business. However, even
              today, there are Model Es on the road in the US. They are
              straightforward to maintain, and they satisfy California's{" "}
              <strong>26</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> emissions
              laws. Perhaps today's technology and materials would help us
              revive the steam car.
            </p>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-30</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 27-30 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> The writer describes the{" "}
                <em>Romeo and Juliet</em> lesson in order to demonstrate
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q27-a" className="mt-1" />
                  <Label htmlFor="q27-a" className="flex-1">
                    A how few students are interested in literature.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q27-b" className="mt-1" />
                  <Label htmlFor="q27-b" className="flex-1">
                    B how a teacher handles a range of learning needs.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q27-c" className="mt-1" />
                  <Label htmlFor="q27-c" className="flex-1">
                    C how unsuitable Shakespeare is for most teenagers.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q27-d" className="mt-1" />
                  <Label htmlFor="q27-d" className="flex-1">
                    D how weaker students can disrupt their classmates'
                    learning.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> What does the writer say about streaming in
                the third paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q28-a" className="mt-1" />
                  <Label htmlFor="q28-a" className="flex-1">
                    A It has a very broad appeal.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q28-b" className="mt-1" />
                  <Label htmlFor="q28-b" className="flex-1">
                    B It favours cleverer students.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q28-c" className="mt-1" />
                  <Label htmlFor="q28-c" className="flex-1">
                    C It is relatively simple to implement.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q28-d" className="mt-1" />
                  <Label htmlFor="q28-d" className="flex-1">
                    D It works better in some schools than others.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> What idea is suggested by the reference to
                Mount Qomolangma in the fifth paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q29-a" className="mt-1" />
                  <Label htmlFor="q29-a" className="flex-1">
                    A students following unsuitable paths
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q29-b" className="mt-1" />
                  <Label htmlFor="q29-b" className="flex-1">
                    B students attempting interesting tasks
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q29-c" className="mt-1" />
                  <Label htmlFor="q29-c" className="flex-1">
                    C students not achieving their full potential
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q29-d" className="mt-1" />
                  <Label htmlFor="q29-d" className="flex-1">
                    D students not being aware of their limitations
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> What does the word 'scaffolding' in the
                sixth paragraph refer to?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q30-a" className="mt-1" />
                  <Label htmlFor="q30-a" className="flex-1">
                    A the factors which prevent a student from learning
                    effectively
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q30-b" className="mt-1" />
                  <Label htmlFor="q30-b" className="flex-1">
                    B the environment where most of a student's learning takes
                    place
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q30-c" className="mt-1" />
                  <Label htmlFor="q30-c" className="flex-1">
                    C the assistance given to a student in their initial stages
                    of learning
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q30-d" className="mt-1" />
                  <Label htmlFor="q30-d" className="flex-1">
                    D the setting of appropriate learning targets for a
                    student's aptitude
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 31-35</h3>
          <p className="mb-2">
            Complete the summary using the list of phrases, <strong>A-I</strong>
            , below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-I</strong>, in boxes 31-35 on
            your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Is streaming effective?</h4>
            <p className="mb-4">
              According to Professor John Hattie of the Melbourne Education
              Research Institute there is very little indication that streaming
              leads to <strong>31</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />
              . He points out that, in schools which use streaming, the most
              significant impact is on those students placed in the{" "}
              <strong>32</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />
              , especially where a large proportion of them have{" "}
              <strong>33</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />
              . Meanwhile, for the <strong>34</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />
              , there appears to be only minimal advantage. A further issue is
              that teachers tend to have <strong>35</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              of students in streamed groups.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <strong>A</strong> wrong classes
              </div>
              <div>
                <strong>B</strong> lower expectations
              </div>
              <div>
                <strong>C</strong> average learners
              </div>
              <div>
                <strong>D</strong> bottom sets
              </div>
              <div>
                <strong>E</strong> brightest pupils
              </div>
              <div>
                <strong>F</strong> disadvantaged backgrounds
              </div>
              <div>
                <strong>G</strong> weaker students
              </div>
              <div>
                <strong>H</strong> higher achievements
              </div>
              <div>
                <strong>I</strong> positive impressions
              </div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <p className="mb-2">
            Do the following statements agree with the views of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 36-40 on your answer sheet, write</p>
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
                <strong>36</strong> The Vygotsky model of education supports the
                concept of a mixed-ability class.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q36-yes" />
                  <Label htmlFor="q36-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q36-no" />
                  <Label htmlFor="q36-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q36-ng" />
                  <Label htmlFor="q36-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>37</strong> Some teachers are uncertain about allowing
                students to take on MKO roles in the classroom.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q37-yes" />
                  <Label htmlFor="q37-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q37-no" />
                  <Label htmlFor="q37-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q37-ng" />
                  <Label htmlFor="q37-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>38</strong> It can be rewarding to teach knowledge which
                you have only recently acquired.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q38-yes" />
                  <Label htmlFor="q38-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q38-no" />
                  <Label htmlFor="q38-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q38-ng" />
                  <Label htmlFor="q38-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>39</strong> The priority should be to ensure that the
                highest-achieving students attain their goals.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q39-yes" />
                  <Label htmlFor="q39-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q39-no" />
                  <Label htmlFor="q39-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q39-ng" />
                  <Label htmlFor="q39-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>40</strong> Taking part in collaborative outdoor
                activities with teachers and classmates can improve student
                outcomes in the classroom.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q40-yes" />
                  <Label htmlFor="q40-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q40-no" />
                  <Label htmlFor="q40-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q40-ng" />
                  <Label htmlFor="q40-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
