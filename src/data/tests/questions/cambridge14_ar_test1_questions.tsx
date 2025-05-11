// Cambridge 14 Academic Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 14 Academic Reading Test 1
 */
export const Cambridge14ARTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-8</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-8 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Children's play</h4>

            <p className="font-bold mb-2">Uses of children's play</p>
            <ul className="list-disc ml-8 mb-4">
              <li>
                building a 'magical kingdom' may help develop{" "}
                <strong>1.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                board games involve <strong>2.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> and
                turn-taking
              </li>
            </ul>

            <p className="font-bold mb-2">
              Recent changes affecting children's play
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>
                population of <strong>3.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> have
                grown
              </li>
              <li>opportunities for free play are limited due to</li>
            </ul>
            <p className="mb-2 ml-8">
              – fear of <strong>4.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2 ml-8">
              – fear of <strong>5.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2 ml-8">
              – increased <strong>6.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in
              schools
            </p>

            <p className="font-bold mb-2">
              International policies on children's play
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>
                it is difficult to find <strong>7.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> to
                support new policies
              </li>
              <li>
                research needs to study the impact of play on the rest of the
                child's <strong>8.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 9-13 on your answer sheet, write</p>
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
                <strong>9.</strong> Children with good self-control are known to
                be likely to do well at school later on.
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
                  <RadioGroupItem id="q9-ng" value="NOT GIVEN" />
                  <Label htmlFor="q9-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10.</strong> The way a child plays may provide
                information about possible medical problems.
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
                  <RadioGroupItem id="q10-ng" value="NOT GIVEN" />
                  <Label htmlFor="q10-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11.</strong> Playing with dolls was found to benefit
                girls' writing more than boys' writing.
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
                  <RadioGroupItem id="q11-ng" value="NOT GIVEN" />
                  <Label htmlFor="q11-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12.</strong> Children had problems thinking up ideas
                when they first created the story with Lego.
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
                  <RadioGroupItem id="q12-ng" value="NOT GIVEN" />
                  <Label htmlFor="q12-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13.</strong> People nowadays regard children's play as
                less significant than they did in the past.
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
                  <RadioGroupItem id="q13-ng" value="NOT GIVEN" />
                  <Label htmlFor="q13-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-18</h3>
          <p className="mb-2">
            Reading Passage 2 has seven paragraphs, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes 14-18 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> a description of how people misused a
                bike-sharing scheme
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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

            <div className="question-item">
              <p className="mb-3">
                <strong>15.</strong> an explanation of why a proposed
                bike-sharing scheme was turned down
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q15-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q15-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q15-${letter.toLowerCase()}`}
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
                <strong>16.</strong> a reference to a person being unable to
                profit from their work
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q16-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q16-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q16-${letter.toLowerCase()}`}
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
                <strong>17.</strong> an explanation of the potential savings a
                bike-sharing scheme would bring
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q17-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q17-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q17-${letter.toLowerCase()}`}
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
                <strong>18.</strong> a reference to the problems a bike-sharing
                scheme was intended to solve
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q18-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q18-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q18-${letter.toLowerCase()}`}
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
          <h3 className="font-bold mb-2">Questions 19-20</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 19 and 20 on your answer sheet.
          </p>

          <p className="mb-4">
            <strong>
              Which TWO of the following statements are made in the text about
              the Amsterdam bike-sharing scheme of 1999?
            </strong>
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q19-20-a" value="A" />
              <Label htmlFor="q19-20-a" className="ml-2">
                A It was initially opposed by a government department.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q19-20-b" value="B" />
              <Label htmlFor="q19-20-b" className="ml-2">
                B It failed when a partner in the scheme withdrew support.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q19-20-c" value="C" />
              <Label htmlFor="q19-20-c" className="ml-2">
                C It aimed to be more successful than the Copenhagen scheme.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q19-20-d" value="D" />
              <Label htmlFor="q19-20-d" className="ml-2">
                D It was made possible by a change in people's attitudes.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q19-20-e" value="E" />
              <Label htmlFor="q19-20-e" className="ml-2">
                E It attracted interest from a range of bike designers.
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-22</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 21 and 22 on your answer sheet.
          </p>

          <p className="mb-4">
            <strong>
              Which TWO of the following statements are made in the text about
              Amsterdam today?
            </strong>
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q21-22-a" value="A" />
              <Label htmlFor="q21-22-a" className="ml-2">
                A The majority of residents would like to prevent all cars from
                entering the city.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-b" value="B" />
              <Label htmlFor="q21-22-b" className="ml-2">
                B There is little likelihood of the city having another
                bike-sharing scheme.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-c" value="C" />
              <Label htmlFor="q21-22-c" className="ml-2">
                C More trips in the city are made by bike than by any other form
                of transport.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-d" value="D" />
              <Label htmlFor="q21-22-d" className="ml-2">
                D A bike-sharing scheme would benefit residents who use public
                transport.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-e" value="E" />
              <Label htmlFor="q21-22-e" className="ml-2">
                E The city has a reputation as a place that welcomes cyclists.
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 23-26 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              The first urban bike-sharing scheme
            </h4>

            <p className="mb-4">
              The first bike-sharing scheme was the idea of the Dutch group
              Provo. The people who belonged to this group were{" "}
              <strong>23.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> They were
              concerned about damage to the environment and about{" "}
              <strong>24.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, and
              believed that the bike-sharing scheme would draw attention to
              these issues. As well as painting some bikes white, they handed
              out <strong>25.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> that
              condemned the use of cars. However, the scheme was not a great
              success: almost as quickly as Provo left the bikes around the
              city, the <strong>26.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> took them
              away. According to Schimmelpennink, the scheme was intended to be
              symbolic. The idea was to get people thinking about the issues.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">
            Look at the following statements (Questions 27-31) and the list of
            researchers below.
          </p>
          <p className="mb-4">
            Match each statement with the correct researcher,{" "}
            <strong>A-F</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-F</strong>, in boxes 27-31 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">List of Researchers</h4>
            <p className="mb-1">
              <strong>A</strong> Pfeffer
            </p>
            <p className="mb-1">
              <strong>B</strong> Lucas
            </p>
            <p className="mb-1">
              <strong>C</strong> Maroudas et al.
            </p>
            <p className="mb-1">
              <strong>D</strong> Ng and Sorensen
            </p>
            <p className="mb-1">
              <strong>E</strong> Enz and Siguaw
            </p>
            <p className="mb-1">
              <strong>F</strong> Deery
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> Hotel managers need to know what would
                encourage good staff to remain.
              </p>
              <RadioGroup name="question27" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q27-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q27-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q27-${letter.toLowerCase()}`}
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
                <strong>28.</strong> The actions of managers may make staff feel
                they shouldn't move to a different employer.
              </p>
              <RadioGroup name="question28" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
              <p className="mb-3">
                <strong>29.</strong> Little is done in the hospitality industry
                to help workers improve their skills.
              </p>
              <RadioGroup name="question29" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
              <p className="mb-3">
                <strong>30.</strong> Staff are less likely to change jobs if
                cooperation is encouraged.
              </p>
              <RadioGroup name="question30" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
              <p className="mb-3">
                <strong>31.</strong> Dissatisfaction with pay is not the only
                reason why hospitality workers change jobs.
              </p>
              <RadioGroup name="question31" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-35</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 32-35 on your answer sheet, write</p>
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

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>32.</strong> One reason for high staff turnover in the
                hospitality industry is poor morale.
              </p>
              <RadioGroup name="question32" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-yes" value="YES" />
                  <Label htmlFor="q32-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-no" value="NO" />
                  <Label htmlFor="q32-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-ng" value="NOT GIVEN" />
                  <Label htmlFor="q32-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> Research has shown that staff have a
                tendency to dislike their workplace.
              </p>
              <RadioGroup name="question33" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q33-yes" value="YES" />
                  <Label htmlFor="q33-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-no" value="NO" />
                  <Label htmlFor="q33-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-ng" value="NOT GIVEN" />
                  <Label htmlFor="q33-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> An improvement in working conditions and
                job security makes staff satisfied with their jobs.
              </p>
              <RadioGroup name="question34" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q34-yes" value="YES" />
                  <Label htmlFor="q34-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-no" value="NO" />
                  <Label htmlFor="q34-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-ng" value="NOT GIVEN" />
                  <Label htmlFor="q34-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> Staff should be allowed to choose when they
                take breaks during the working day.
              </p>
              <RadioGroup name="question35" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q35-yes" value="YES" />
                  <Label htmlFor="q35-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-no" value="NO" />
                  <Label htmlFor="q35-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-ng" value="NOT GIVEN" />
                  <Label htmlFor="q35-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 36-40 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Fun at work</h4>

            <p className="mb-4">
              Tews, Michel and Stafford carried out research on staff in an
              American chain of <strong>36.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. They
              discovered that activities designed for staff to have fun improved
              their <strong>37.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, and that
              management involvement led to lower staff <strong>38.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. They
              also found that the activities needed to fit with both the
              company's <strong>39.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and the{" "}
              <strong>40.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of the
              staff. A balance was required between a degree of freedom and
              maintaining work standards.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge14ARTest1Questions;
