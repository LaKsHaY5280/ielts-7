// Cambridge 15 General Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 15 General Reading Test 1
 */
const Cambridge15GRTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">SECTION 1: Questions 1-14</h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-6</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in the
            text?
          </p>
          <p className="mb-2">In boxes 1-6 on your answer sheet, write</p>
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
                <strong>1.</strong> You will receive a card telling you if an
                item has been left with a neighbour.
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
                <strong>2.</strong> It may be quicker to get a refund than a
                replacement for a non-delivered item.
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
                <strong>3.</strong> You are entitled to a refund if the item
                fails to arrive by a certain time.
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
                <strong>4.</strong> There is a time limit when using the
                'chargeback' scheme for a debit card payment.
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
                <strong>5.</strong> You can use the 'chargeback' scheme for a
                credit card payment of more than £100.
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
                <strong>6.</strong> PayPal's online resolution centre has a good
                reputation for efficiency.
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 7-14</h3>
          <p className="mb-2">
            Look at the five reviews of rice cookers, <strong>A-E</strong>.
          </p>
          <p className="mb-2">
            For which rice cooker are the following statements true?
          </p>
          <p className="mb-2">
            Write the correct letter, <strong>A-E</strong>, in boxes{" "}
            <strong>7-14</strong> on your answer sheet.
          </p>
          <p className="mb-2">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>7.</strong> The handles at the side are hard to use.
              </p>
              <RadioGroup name="question7" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q7-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q7-${letter}`} value={letter} />
                    <Label htmlFor={`q7-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>8.</strong> It cooks brown rice without making a mess.
              </p>
              <RadioGroup name="question8" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q8-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q8-${letter}`} value={letter} />
                    <Label htmlFor={`q8-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>9.</strong> It automatically switches setting to keep to
                rice warm when cooked.
              </p>
              <RadioGroup name="question9" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q9-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q9-${letter}`} value={letter} />
                    <Label htmlFor={`q9-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10.</strong> It's difficult to get the removable top
                really clean.
              </p>
              <RadioGroup name="question10" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q10-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q10-${letter}`} value={letter} />
                    <Label htmlFor={`q10-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11.</strong> A selection of recipes is provided with the
                cooker.
              </p>
              <RadioGroup name="question11" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q11-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q11-${letter}`} value={letter} />
                    <Label htmlFor={`q11-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12.</strong> It has a handle at the top for carrying the
                cooker safely.
              </p>
              <RadioGroup name="question12" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q12-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q12-${letter}`} value={letter} />
                    <Label htmlFor={`q12-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13.</strong> The outside of the cooker doesn't get too
                hot.
              </p>
              <RadioGroup name="question13" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q13-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q13-${letter}`} value={letter} />
                    <Label htmlFor={`q13-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> You can put the pot in the dishwasher.
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q14-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q14-${letter}`} value={letter} />
                    <Label htmlFor={`q14-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          SECTION 2: Questions 15-27
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 15-22</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong>{" "}
            from the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 15-22 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Safety when working on roofs</h4>

            <p className="font-bold mb-2">Investigations show that</p>
            <p className="mb-2">
              – over half of falls are from less than <strong>15</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">– most falls are from ladders and roofs</p>
            <p className="mb-2">– falls cost $24 million per year</p>
            <p className="mb-2">
              – the majority of falls occur on <strong>16</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>

            <p className="font-bold mb-2 mt-4">
              Hazard identification should be carried out
            </p>
            <p className="mb-2">– before the work starts</p>
            <p className="mb-2">
              – when conditions such as the weather or worker numbers change
            </p>

            <p className="font-bold mb-2 mt-4">Controls</p>
            <p className="mb-2">
              – <strong>17</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> the
              hazard at the planning stage before the work begins if possible
            </p>
            <p className="mb-2">
              – prevent a fall by using edge protection, e.g. scaffolding or{" "}
              <strong>18</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – reduce the likelihood of injury, e.g. by using{" "}
              <strong>19</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>

            <p className="font-bold mb-2 mt-4">Ladders</p>
            <p className="mb-2">
              – these should only be used for <strong>20</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> which
              does not take a long time
            </p>
            <p className="mb-2">
              – training should be provided in their <strong>21</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and use
            </p>
            <p className="mb-2">
              – regular <strong>22</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of
              ladders is required
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-27</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> from
            the text for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 23-27 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>23.</strong> The maximum amount of money a woman can get
                each week is £{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>24.</strong> Being{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> for a
                time does not necessarily mean that a woman will not be eligible
                for Maternity Allowance.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>25.</strong> In order to claim, a woman must send a{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> or a
                Small Earnings Exemption Certificate as evidence of her income.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>26.</strong> In order to claim, a woman may need to
                provide a{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> as
                evidence of the due date.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>27.</strong> Payment may be affected by differences in
                someone's{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />, such
                as a return to work, and the local Jobcentre Plus must be
                informed.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          SECTION 3: Questions 28-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 28-31</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 28-31 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> The writer suggests that Marshall's
                discovery came at a good time for the US because
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A the Mexican-American War was ending so there were men
                    needing work.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B his expertise in water power would be useful in gold
                    mining.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C the population of California had already begun to increase
                    rapidly.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D the region was about to come under the control of the US.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> What was the reaction in 1848 to the news
                of the discovery of gold?
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A The press played a large part in convincing the public of
                    the riches available.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B Many men in San Francisco left immediately to check it out
                    for themselves.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C People needed to see physical evidence before they took it
                    seriously.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D Men in other mines in the US were among the first to
                    respond to it.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> What was the result of thousands of people
                moving to California?
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    A San Francisco could not cope with the influx of people
                    from around the world.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    B Many miners got more money than they could ever have
                    earned at home.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    C Some of those who stayed behind had to take on unexpected
                    roles.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    D New towns were established which became good places to
                    live.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> What does the writer say about using pans
                and rockers to find gold?
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    A Both methods required the addition of mercury.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    B A rocker needed more than one miner to operate it.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    C Pans were the best system for novice miners to use.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    D Miners had to find a way round a design fault in one
                    system.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">
            The text has seven sections, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes{" "}
            <strong>32-36</strong> on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>32.</strong> a reference to ways of making money in
                California other than mining for gold
              </p>
              <RadioGroup name="question32" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q32-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q32-${letter}`} value={letter} />
                    <Label htmlFor={`q32-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> a suggestion that the gold that was found
                did not often compensate for the hard work undertaken
              </p>
              <RadioGroup name="question33" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q33-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q33-${letter}`} value={letter} />
                    <Label htmlFor={`q33-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> a mention of an individual who convinced
                many of the existence of gold in California
              </p>
              <RadioGroup name="question34" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q34-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q34-${letter}`} value={letter} />
                    <Label htmlFor={`q34-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> details of the pre-Gold Rush population of
                California
              </p>
              <RadioGroup name="question35" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q35-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q35-${letter}`} value={letter} />
                    <Label htmlFor={`q35-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>36.</strong> a contrast between shrinking revenue and
                increasing population
              </p>
              <RadioGroup name="question36" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q36-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q36-${letter}`} value={letter} />
                    <Label htmlFor={`q36-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
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

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Basic techniques for extracting gold
            </h4>
            <p className="mb-4">
              The most basic method used by many miners began with digging some{" "}
              <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> out of a
              river and hoping it might contain gold. Small amounts were put in
              a pan with water. The pan was spun round, causing the liquid and
              less heavy contents of the pan to come out. Gold dust, which
              weighed more, remained in the pan or, if the miners were very
              lucky, there might even be some <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> too. It
              was, however, a very laborious method.
            </p>

            <p className="mb-4">
              The rocker was also used. A miner would put some earth and rock
              into the higher end, together with some water. He would then shake
              the rocker. Larger stones stuck in the <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, while
              gold dropped to the bottom. Unfortunately, the rocker was not
              designed to catch what was called flour. However, a process was
              introduced involving <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to ensure
              no gold was washed out in the water.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cambridge15GRTest1Questions };
export default Cambridge15GRTest1Questions;
