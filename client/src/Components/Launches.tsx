import gql from 'graphql-tag'
import * as React from 'react'
import { Query } from 'react-apollo'

//  Import components
import LaunchItem, { ILaunchItemProps } from './LaunchItem'

export interface ILaunchesProps {
}

const { Component, Fragment } = React

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export default class Launches extends Component<ILaunchesProps, any> {
  public render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data}) => {
              if (loading) { return <h4>Loading...</h4> }
              if (error) { console.log(error) }

              console.log(data)
              return <Fragment>
                {
                  data.launches.map((launch: ILaunchItemProps) => (
                    <LaunchItem {...launch} key={launch.flight_number}/>
                  ))
                }
              </Fragment>
            }
          }
        </Query>
      </Fragment>
    )
  }
}
