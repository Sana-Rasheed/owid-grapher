import * as React from "react"

import { storiesOf } from "@storybook/react"

import { FeedbackForm } from "site/client/Feedback"
import { ChartStoryView } from "site/client/ChartStoryView"
import "site/client/owid.scss"
import "charts/client/chart.scss"
import { CovidDataExplorer } from "charts/covidDataExplorer/CovidDataExplorer"
import { covidSampleRows } from "test/fixtures/CovidSampleRows"
import { CovidQueryParams } from "charts/covidDataExplorer/CovidChartUrl"

storiesOf("FeedbackForm", module).add("normal", () => <FeedbackForm />)

storiesOf("ChartStoryView", module).add("normal", () => <ChartStoryView />)

storiesOf("CovidDataExplorer", module).add("normal", () => {
    const startingParams = new CovidQueryParams("")
    const dummyMeta = {
        charts: {},
        variables: {}
    }
    return (
        <CovidDataExplorer
            data={covidSampleRows}
            params={startingParams}
            covidChartAndVariableMeta={dummyMeta}
            updated="2020-05-09T18:59:31"
        />
    )
})

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
