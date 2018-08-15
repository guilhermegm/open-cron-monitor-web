import React, { Component } from 'react'
import CentralizedPaper from './CentralizedPaper'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'


class ReportTable extends Component {
  render() {
    return (
      <CentralizedPaper>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.reports.map(report => (
                <TableRow key={report.id}>
                  <TableCell>{report.success ? 'Ok' : 'Error'}</TableCell>
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </CentralizedPaper>
    )
  }
}

export default ReportTable
