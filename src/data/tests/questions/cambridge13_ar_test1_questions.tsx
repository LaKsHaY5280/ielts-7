// Cambridge 13 Academic Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 13 Academic Reading Test 1
 */
export const Cambridge13ARTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-7</h3>
          <p className="mb-2">Complete the table below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-7 on your answer sheet.
          </p>

          <div className="mb-6">
            <table className="border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 w-1/3">
                    Section of website
                  </th>
                  <th className="border border-gray-300 p-2 w-2/3">Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Database of tourism services
                  </td>
                  <td className="border border-gray-300 p-2">
                    <p>
                      easy for tourism-related businesses to get on the list
                    </p>
                    <p>
                      allowed businesses to <strong>1.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      information regularly
                    </p>
                    <p>
                      provided a country-wide evaluation of businesses,
                      including their impact on the <strong>2.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Special features on local topics
                  </td>
                  <td className="border border-gray-300 p-2">
                    e.g. an interview with a former sports <strong>3.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />,
                    and an interactive tour of various locations used in{" "}
                    <strong>4.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    Information on driving routes
                  </td>
                  <td className="border border-gray-300 p-2">
                    varied depending on the <strong>5.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">Travel Planner</td>
                  <td className="border border-gray-300 p-2">
                    included a map showing selected places, details of public
                    transport and local <strong>6.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">'Your Words'</td>
                  <td className="border border-gray-300 p-2">
                    travelers could send a link to their <strong>7.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 8-13 on your answer sheet, write</p>
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
                <strong>8.</strong> The website www.newzealand.com aimed to
                provide ready-made itineraries and packages for travel companies
                and individual tourists.
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

            <div className="question-item">
              <p className="mb-3">
                <strong>9.</strong> It was found that most visitors started
                searching on the website by geographical location.
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
                <strong>10.</strong> According to research, 26% of visitor
                satisfaction is related to their accommodation.
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
                <strong>11.</strong> Visitors to New Zealand like to become
                involved in the local culture.
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
                <strong>12.</strong> Visitors like staying in small hotels in
                New Zealand rather than in larger ones.
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
                <strong>13.</strong> Many visitors feel it is unlikely that they
                will return to New Zealand after their visit.
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
          <h3 className="font-bold mb-2">Questions 14-19</h3>
          <p className="mb-2">
            Reading Passage 2 has six paragraphs, <strong>A-F</strong>.
          </p>
          <p className="mb-2">
            Choose the correct heading for each paragraph from the list of
            headings below.
          </p>
          <p className="mb-4">
            Write the correct number, <strong>i-viii</strong>, in boxes 14-19 on
            your answer sheet.
          </p>

          <div className="mb-4 pl-5">
            <p className="mb-1">
              <strong>List of Headings</strong>
            </p>
            <p className="mb-1">
              <strong>i</strong> The productive outcomes that may result from
              boredom
            </p>
            <p className="mb-1">
              <strong>ii</strong> What teachers can do to prevent boredom
            </p>
            <p className="mb-1">
              <strong>iii</strong> A new explanation and a new cure for boredom
            </p>
            <p className="mb-1">
              <strong>iv</strong> Problems with a scientific approach to boredom
            </p>
            <p className="mb-1">
              <strong>v</strong> A potential danger arising from boredom
            </p>
            <p className="mb-1">
              <strong>vi</strong> Creating a system of classification for
              feelings of boredom
            </p>
            <p className="mb-1">
              <strong>vii</strong> Age groups most affected by boredom
            </p>
            <p className="mb-1">
              <strong>viii</strong> Identifying those most affected by boredom
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14.</strong> Paragraph A
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div className="flex items-center" key={`q14-${num}`}>
                      <RadioGroupItem id={`q14-${num}`} value={num} />
                      <Label htmlFor={`q14-${num}`} className="ml-2">
                        {num}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15.</strong> Paragraph B
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div className="flex items-center" key={`q15-${num}`}>
                      <RadioGroupItem id={`q15-${num}`} value={num} />
                      <Label htmlFor={`q15-${num}`} className="ml-2">
                        {num}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16.</strong> Paragraph C
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div className="flex items-center" key={`q16-${num}`}>
                      <RadioGroupItem id={`q16-${num}`} value={num} />
                      <Label htmlFor={`q16-${num}`} className="ml-2">
                        {num}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17.</strong> Paragraph D
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div className="flex items-center" key={`q17-${num}`}>
                      <RadioGroupItem id={`q17-${num}`} value={num} />
                      <Label htmlFor={`q17-${num}`} className="ml-2">
                        {num}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18.</strong> Paragraph E
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div className="flex items-center" key={`q18-${num}`}>
                      <RadioGroupItem id={`q18-${num}`} value={num} />
                      <Label htmlFor={`q18-${num}`} className="ml-2">
                        {num}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19.</strong> Paragraph F
              </p>
              <RadioGroup name="question19" className="flex flex-wrap gap-4">
                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(
                  (num) => (
                    <div className="flex items-center" key={`q19-${num}`}>
                      <RadioGroupItem id={`q19-${num}`} value={num} />
                      <Label htmlFor={`q19-${num}`} className="ml-2">
                        {num}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 20-23</h3>
          <p className="mb-2">
            Look at the following people (Questions <strong>20-23</strong>) and
            the list of ideas below.
          </p>
          <p className="mb-2">
            Match each person with the correct idea, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-E</strong>, in boxes 20-23 on
            your answer sheet.
          </p>

          <div className="mb-4 pl-5">
            <p className="mb-1">
              <strong>List of Ideas</strong>
            </p>
            <p className="mb-1">
              <strong>A</strong> The way we live today may encourage boredom.
            </p>
            <p className="mb-1">
              <strong>B</strong> One sort of boredom is worse than all the
              others.
            </p>
            <p className="mb-1">
              <strong>C</strong> Levels of boredom may fall in the future.
            </p>
            <p className="mb-1">
              <strong>D</strong> Trying to cope with boredom can increase its
              negative effects.
            </p>
            <p className="mb-1">
              <strong>E</strong> Boredom may encourage us to avoid an unpleasant
              experience.
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>20.</strong> Peter Toohey
              </p>
              <RadioGroup name="question20" className="flex gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q20-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q20-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q20-${letter.toLowerCase()}`}
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
                <strong>21.</strong> Thomas Goetz
              </p>
              <RadioGroup name="question21" className="flex gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q21-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q21-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q21-${letter.toLowerCase()}`}
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
                <strong>22.</strong> John Eastwood
              </p>
              <RadioGroup name="question22" className="flex gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q22-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q22-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q22-${letter.toLowerCase()}`}
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
                <strong>23.</strong> Francoise Wemelsfelder
              </p>
              <RadioGroup name="question23" className="flex gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q23-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q23-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q23-${letter.toLowerCase()}`}
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
          <h3 className="font-bold mb-2">Questions 24-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 24-26 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Responses to boredom</h4>
            <p className="mb-4">
              For John Eastwood, the central feature of boredom is that people
              cannot <strong>24.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, due to a
              failure in what he calls the 'attention system', and as a result
              they become frustrated and irritable. His team suggests that those
              for whom <strong>25.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is an
              important aim in life may have problems in coping with boredom,
              whereas those who have the characteristic of <strong>26.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> can
              generally cope with it.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 27-31 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> What is the writer suggesting about
                computer-produced works in the first paragraph?
              </p>
              <RadioGroup name="question27" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q27-a" value="A" />
                  <Label htmlFor="q27-a" className="ml-2">
                    A People's acceptance of them can vary considerably.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-b" value="B" />
                  <Label htmlFor="q27-b" className="ml-2">
                    B A great deal of progress has already been attained in this
                    field.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-c" value="C" />
                  <Label htmlFor="q27-c" className="ml-2">
                    C They have had more success in some artistic genres than in
                    others.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-d" value="D" />
                  <Label htmlFor="q27-d" className="ml-2">
                    D The advances are not as significant as the public believes
                    them to be.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> According to Geraint Wiggins, why are many
                people worried by computer art?
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A It is aesthetically inferior to human art.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B It may ultimately supersede human art.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C It undermines a fundamental human quality.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D It will lead to a deterioration in human ability.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> What is a key difference between Aaron and
                the Painting Fool?
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A its programmer's background
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B public response to its work
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C the source of its subject matter
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D the technical standard of its output
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> What point does Simon Colton make in the
                fourth paragraph?
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    A Software-produced art is often dismissed as childish and
                    simplistic.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    B The same concepts of creativity should not be applied to
                    all forms of art.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    C It is unreasonable to expect a machine to be as
                    imaginative as a human being.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    D People tend to judge computer art and human art according
                    to different criteria.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> The writer refers to the paintings of a
                chair as an example of computer art which
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    A achieves a particularly striking effect.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    B exhibits a certain level of genuine artistic skill.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    C closely resembles that of a well-known artist.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    D highlights the technical limitations of the software.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-37</h3>
          <p className="mb-2">
            Complete each sentence with the correct ending, <strong>A-G</strong>{" "}
            below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes 32-37 on
            your answer sheet.
          </p>

          <div className="mb-4 pl-5">
            <p className="mb-1">
              <strong>List of Ideas</strong>
            </p>
            <p className="mb-1">
              <strong>A</strong> generating work that was virtually
              indistinguishable from that of humans.
            </p>
            <p className="mb-1">
              <strong>B</strong> knowing whether it was the work of humans or
              software.
            </p>
            <p className="mb-1">
              <strong>C</strong> producing work entirely dependent on the
              imagination of its creator.
            </p>
            <p className="mb-1">
              <strong>D</strong> comparing the artistic achievements of humans
              and computers.
            </p>
            <p className="mb-1">
              <strong>E</strong> revealing the technical details of his program.
            </p>
            <p className="mb-1">
              <strong>F</strong> persuading the public to appreciate computer
              art.
            </p>
            <p className="mb-1">
              <strong>G</strong> discovering that it was the product of a
              computer program
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>32.</strong> Simon Colton says it is important to
                consider the long-term view when
              </p>
              <RadioGroup name="question32" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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

            <div className="question-item">
              <p className="mb-2">
                <strong>33.</strong> David Cope's EMI software surprised people
                by
              </p>
              <RadioGroup name="question33" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34.</strong> Geraint Wiggins criticized Cope for not
              </p>
              <RadioGroup name="question34" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35.</strong> Douglas Hofstadter claimed that EMI was
              </p>
              <RadioGroup name="question35" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q35-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q35-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q35-${letter.toLowerCase()}`}
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
                <strong>36.</strong> Audiences who had listened to EMI's music
                became angry after
              </p>
              <RadioGroup name="question36" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q36-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q36-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q36-${letter.toLowerCase()}`}
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
                <strong>37.</strong> The participants in David Moffat's study
                had to assess music without
              </p>
              <RadioGroup name="question37" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q37-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q37-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q37-${letter.toLowerCase()}`}
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
          <h3 className="font-bold mb-2">Questions 38-40</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 38-40 on your answer sheet, write</p>
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
                <strong>38.</strong> Moffat's research may help explain people's
                reactions to EMI.
              </p>
              <RadioGroup name="question38" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-yes" value="YES" />
                  <Label htmlFor="q38-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-no" value="NO" />
                  <Label htmlFor="q38-no" className="ml-2">
                    NO
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
                <strong>39.</strong> The non-experts in Moffat's study all
                responded in a predictable way.
              </p>
              <RadioGroup name="question39" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-yes" value="YES" />
                  <Label htmlFor="q39-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-no" value="NO" />
                  <Label htmlFor="q39-no" className="ml-2">
                    NO
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
                <strong>40.</strong> Justin Kruger's findings cast doubt on Paul
                Bloom's theory about people's prejudice towards computer art.
              </p>
              <RadioGroup name="question40" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-yes" value="YES" />
                  <Label htmlFor="q40-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-no" value="NO" />
                  <Label htmlFor="q40-no" className="ml-2">
                    NO
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

export default Cambridge13ARTest1Questions;
