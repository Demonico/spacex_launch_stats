import classNames from 'classnames'
import * as React from 'react'

export interface ILaunchItemProps {
  key: any
  flight_number: number
  mission_name?: string
  launch_date_local?: string
  launch_success?: boolean
}

// export interface ILaunchItemInfo {}

export default class LaunchItem extends React.Component<ILaunchItemProps, any> {
  constructor(props: ILaunchItemProps) {
    super(props)

    this.state = {}
  }

  public render() {
    const {
      flight_number,
      mission_name,
      launch_date_local,
      launch_success,
    } = this.props
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-9">
            <h4>
              Mission:
              <span
                className={classNames({
                  'text-danger': !launch_success,
                  'text-success': launch_success,
                })}
              >
                {mission_name}
              </span>
            </h4>
            <p>Date: {launch_date_local}</p>
          </div>
          <div className="col-md-3">
            <button className="btn btn-secondary">Launch Details</button>
          </div>
        </div>
      </div>
    )
  }
}
