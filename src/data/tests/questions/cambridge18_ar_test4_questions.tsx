import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 18 Academic Reading Test 4
 */
export const Cambridge18ARTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-5</h3>
          <p className="mb-2">
            Reading Passage 1 has five paragraphs, <strong>A-E</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-E</strong>, in boxes 1-5 on your
            answer sheet.
          </p>
          <p className="mb-2">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>1</strong> mention of several challenges to be overcome
                before a green roof can be installed
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E"].map((option) => (
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
                <strong>2</strong> reference to a city where green roofs have
                been promoted for many years
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E"].map((option) => (
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
                <strong>3</strong> a belief that existing green roofs should be
                used as a model for new ones
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E"].map((option) => (
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
                <strong>4</strong> examples of how green roofs can work in
                combination with other green urban initiatives
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E"].map((option) => (
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

            <div className="question-item">
              <p className="mb-2">
                <strong>5</strong> the need to make a persuasive argument for
                the financial benefits of green roofs
              </p>
              <RadioGroup className="flex flex-row flex-wrap space-x-2">
                {["A", "B", "C", "D", "E"].map((option) => (
                  <div
                    key={option}
                    className="flex items-center space-x-1 mr-4"
                  >
                    <RadioGroupItem value={option} id={`q5-${option}`} />
                    <Label htmlFor={`q5-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 6-9</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 6-9 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Advantages of green roofs</h4>
            <p className="mb-4">
              City rooftops covered with greenery have many advantages. These
              include lessening the likelihood that floods will occur, reducing
              how much money is spent on <strong>6</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and
              creating environments that are suitable for wildlife. In many
              cases, they can also be used for producing <strong>7</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
            <p className="mb-4">
              There are also social benefits of green roofs. For example, the
              medical profession recommends <strong>8</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> as an
              activity to help people cope with mental health issues. Studies
              have also shown that the availability of green spaces can prevent
              physical problems such as <strong>9</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 10 and 11</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 10 and 11 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> advantages of using newer buildings for
            green roofs are mentioned in <strong>Paragraph C</strong> of the
            passage?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q10-11-a" />
              <Label htmlFor="q10-11-a" className="flex-1">
                A a longer growing season for edible produce
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q10-11-b" />
              <Label htmlFor="q10-11-b" className="flex-1">
                B more economical use of water
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q10-11-c" />
              <Label htmlFor="q10-11-c" className="flex-1">
                C greater water-storage capacity
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q10-11-d" />
              <Label htmlFor="q10-11-d" className="flex-1">
                D ability to cultivate more plant types
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q10-11-e" />
              <Label htmlFor="q10-11-e" className="flex-1">
                E a large surface area for growing plants
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 12 and 13</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 12 and 13 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> aims of new variations on the concept of
            green roofs are mentioned in <strong>Paragraph E</strong> of the
            passage?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q12-13-a" />
              <Label htmlFor="q12-13-a" className="flex-1">
                A to provide habitats for a wide range of species
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q12-13-b" />
              <Label htmlFor="q12-13-b" className="flex-1">
                B to grow plants successfully even in the wettest climates
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q12-13-c" />
              <Label htmlFor="q12-13-c" className="flex-1">
                C to regulate the temperature of the immediate environment
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q12-13-d" />
              <Label htmlFor="q12-13-d" className="flex-1">
                D to generate power from a sustainable source
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q12-13-e" />
              <Label htmlFor="q12-13-e" className="flex-1">
                E to collect water to supply other buildings
              </Label>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-16</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 14-16 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> What can we learn from the first paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q14-a" className="mt-1" />
                  <Label htmlFor="q14-a" className="flex-1">
                    A where the notion of innate intelligence first began
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q14-b" className="mt-1" />
                  <Label htmlFor="q14-b" className="flex-1">
                    B when ideas about the nature of intelligence began to shift
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q14-c" className="mt-1" />
                  <Label htmlFor="q14-c" className="flex-1">
                    C how scientists have responded to changing views of
                    intelligence
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q14-d" className="mt-1" />
                  <Label htmlFor="q14-d" className="flex-1">
                    D why thinkers turned away from the idea of intelligence
                    being fixed
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> The second paragraph describes how schools
                encourage students to
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q15-a" className="mt-1" />
                  <Label htmlFor="q15-a" className="flex-1">
                    A identify their personal ambitions.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q15-b" className="mt-1" />
                  <Label htmlFor="q15-b" className="flex-1">
                    B help each other to realise their goals.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q15-c" className="mt-1" />
                  <Label htmlFor="q15-c" className="flex-1">
                    C have confidence in their potential to succeed.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q15-d" className="mt-1" />
                  <Label htmlFor="q15-d" className="flex-1">
                    D concentrate on where their particular strengths lie.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> In the third paragraph, the writer suggests
                that students with a fixed mindset
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q16-a" className="mt-1" />
                  <Label htmlFor="q16-a" className="flex-1">
                    A tend to be less competitive.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q16-b" className="mt-1" />
                  <Label htmlFor="q16-b" className="flex-1">
                    B generally have a low sense of self-esteem.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q16-c" className="mt-1" />
                  <Label htmlFor="q16-c" className="flex-1">
                    C will only work hard if they are given constant
                    encouragement.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q16-d" className="mt-1" />
                  <Label htmlFor="q16-d" className="flex-1">
                    D are afraid to push themselves beyond what they see as
                    their limitations.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 17-22</h3>
          <p className="mb-2">
            Look at the following statements (Questions 17-22) and the list of
            people below.
          </p>
          <p className="mb-2">
            Match each statement with the correct person or people,{" "}
            <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-E</strong>, in boxes 17-22 on
            your answer sheet.
          </p>
          <p className="mb-2">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-4">
            <p className="mb-1">
              <strong>List of People</strong>
            </p>
            <p className="mb-1">
              <strong>A</strong> Alfred Binet
            </p>
            <p className="mb-1">
              <strong>B</strong> Carol Dweck
            </p>
            <p className="mb-1">
              <strong>C</strong> Andrew Gelman
            </p>
            <p className="mb-1">
              <strong>D</strong> Timothy Bates
            </p>
            <p className="mb-1">
              <strong>E</strong> David Yeager and Gregory Walton
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> The methodology behind the growth mindset
                studies was not strict enough.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q17-${option}`} />
                    <Label htmlFor={`q17-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> The idea of the growth mindset has been
                incorrectly interpreted.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q18-${option}`} />
                    <Label htmlFor={`q18-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> Intellectual ability is an unchangeable
                feature of each individual.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q19-${option}`} />
                    <Label htmlFor={`q19-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> The growth mindset should be promoted
                without students being aware of it.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q20-${option}`} />
                    <Label htmlFor={`q20-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> The growth mindset is not simply about
                boosting students' morale.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q21-${option}`} />
                    <Label htmlFor={`q21-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> Research shows that the growth mindset has
                no effect on academic achievement.
              </p>
              <RadioGroup className="flex flex-row space-x-4">
                {["A", "B", "C", "D", "E"].map((option) => (
                  <div key={option} className="flex items-center space-x-1">
                    <RadioGroupItem value={option} id={`q22-${option}`} />
                    <Label htmlFor={`q22-${option}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-26</h3>
          <p className="mb-2">
            Do the following statements agree with the views of the writer in
            Reading Passage 2?
          </p>
          <p className="mb-2">In boxes 23-26 on your answer sheet, write</p>
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
                <strong>23</strong> Dweck has handled criticisms of her work in
                an admirable way.
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

            <div className="question-item">
              <p className="mb-2">
                <strong>24</strong> Students' self-perception is a more
                effective driver of self-confidence than actual achievement is.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q24-yes" />
                  <Label htmlFor="q24-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q24-no" />
                  <Label htmlFor="q24-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q24-ng" />
                  <Label htmlFor="q24-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>25</strong> Recent evidence about growth mindset
                interventions has attracted unfair coverage in the media.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q25-yes" />
                  <Label htmlFor="q25-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q25-no" />
                  <Label htmlFor="q25-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q25-ng" />
                  <Label htmlFor="q25-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>26</strong> Deliberate attempts to encourage students to
                strive for high achievement may have a negative effect.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q26-yes" />
                  <Label htmlFor="q26-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q26-no" />
                  <Label htmlFor="q26-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q26-ng" />
                  <Label htmlFor="q26-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-30</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 27-30 on your answer sheet, write</p>
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
                <strong>27</strong> Wegener's ideas about continental drift were
                widely disputed while he was alive.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q27-yes" />
                  <Label htmlFor="q27-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q27-no" />
                  <Label htmlFor="q27-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q27-ng" />
                  <Label htmlFor="q27-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> The idea that the continents remained fixed
                in place was defended in a number of respected scientific
                publications.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q28-yes" />
                  <Label htmlFor="q28-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q28-no" />
                  <Label htmlFor="q28-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q28-ng" />
                  <Label htmlFor="q28-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> Wegener relied on a limited range of
                scientific fields to support his theory of continental drift.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q29-yes" />
                  <Label htmlFor="q29-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q29-no" />
                  <Label htmlFor="q29-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q29-ng" />
                  <Label htmlFor="q29-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> The similarities between Wegener's theory of
                continental drift and modern-day plate tectonics are enormous.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q30-yes" />
                  <Label htmlFor="q30-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q30-no" />
                  <Label htmlFor="q30-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q30-ng" />
                  <Label htmlFor="q30-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 31-36</h3>
          <p className="mb-2">
            Complete the summary using the list of phrases, <strong>A-J</strong>
            , below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-J</strong>, in boxes 31-36 on
            your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Wegener's life and work</h4>
            <p className="mb-4">
              One of the remarkable things about Wegener from a{" "}
              <strong>31</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              is that although he proposed a theory of continental drift, he was
              not a geologist. His <strong>32</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              were limited to atmospheric physics. However, at the time he
              proposed his theory of continental drift in 1912, he was already a
              person of <strong>33</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />
              . Six years previously, there had been his <strong>34</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              of 52 hours in a hot-air balloon, followed by his well-publicised
              but <strong>35</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              of Greenland's coast. With the publication of his textbook on
              thermodynamics, he had also come to the attention of a{" "}
              <strong>36</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              of German scientists.
            </p>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <strong>A</strong> modest fame
              </div>
              <div>
                <strong>B</strong> vast range
              </div>
              <div>
                <strong>C</strong> record-breaking achievement
              </div>
              <div>
                <strong>D</strong> research methods
              </div>
              <div>
                <strong>E</strong> select group
              </div>
              <div>
                <strong>F</strong> professional interests
              </div>
              <div>
                <strong>G</strong> scientific debate
              </div>
              <div>
                <strong>H</strong> hazardous exploration
              </div>
              <div>
                <strong>I</strong> biographer's perspective
              </div>
              <div>
                <strong>J</strong> narrow investigation
              </div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 37-40 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>37</strong> What is Mott T Greene doing in the fifth
                paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q37-a" className="mt-1" />
                  <Label htmlFor="q37-a" className="flex-1">
                    A describing what motivated him to write the book
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q37-b" className="mt-1" />
                  <Label htmlFor="q37-b" className="flex-1">
                    B explaining why it is desirable to read the whole book
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q37-c" className="mt-1" />
                  <Label htmlFor="q37-c" className="flex-1">
                    C suggesting why Wegener pursued so many different careers
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q37-d" className="mt-1" />
                  <Label htmlFor="q37-d" className="flex-1">
                    D indicating what aspects of Wegener's life interested him
                    most
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>38</strong> What is said about Wegener in the sixth
                paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q38-a" className="mt-1" />
                  <Label htmlFor="q38-a" className="flex-1">
                    A He was not a particularly ambitious person.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q38-b" className="mt-1" />
                  <Label htmlFor="q38-b" className="flex-1">
                    B He kept a record of all his scientific observations.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q38-c" className="mt-1" />
                  <Label htmlFor="q38-c" className="flex-1">
                    C He did not adopt many of the scientific practices of the
                    time.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q38-d" className="mt-1" />
                  <Label htmlFor="q38-d" className="flex-1">
                    D He enjoyed discussing new discoveries with other
                    scientists.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>39</strong> What does Greene say about some other famous
                scientists?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q39-a" className="mt-1" />
                  <Label htmlFor="q39-a" className="flex-1">
                    A Their published works had a greater impact than Wegener's
                    did.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q39-b" className="mt-1" />
                  <Label htmlFor="q39-b" className="flex-1">
                    B They had fewer doubts about their scientific ideas than
                    Wegener did.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q39-c" className="mt-1" />
                  <Label htmlFor="q39-c" className="flex-1">
                    C Their scientific ideas were more controversial than
                    Wegener's.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q39-d" className="mt-1" />
                  <Label htmlFor="q39-d" className="flex-1">
                    D They are easier subjects to write about than Wegener.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>40</strong> What is Greene's main point in the final
                paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q40-a" className="mt-1" />
                  <Label htmlFor="q40-a" className="flex-1">
                    A It is not enough in life to have good intentions.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q40-b" className="mt-1" />
                  <Label htmlFor="q40-b" className="flex-1">
                    B People need to plan carefully if they want to succeed.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q40-c" className="mt-1" />
                  <Label htmlFor="q40-c" className="flex-1">
                    C People have little control over many aspects of their
                    lives.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q40-d" className="mt-1" />
                  <Label htmlFor="q40-d" className="flex-1">
                    D It is important that people ensure they have the freedom
                    to act.
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
