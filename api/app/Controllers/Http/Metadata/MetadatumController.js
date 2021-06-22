'use strict'

const Denominations = use("App/Models/SettingsDenomination")
const Countries = use("App/Models/SettingsCountry")
const States = use("App/Models/SettingsState")
const Branch = use("App/Models/BranchInfo")
 

class MetadatumController {
  async getMetadata({
    request,
    response,
  }) {
    try {
      const denomination = await Denominations.all();
      const countries = await Countries.all();
      const states = await States.all();
      const branch  = await Branch.all()

      const metadata = {
        denomination,
        countries,
        states,
        branch
      }
      return response.status(200).json({
        result: metadata,
        label: `Fetch Metadata`,
        statusCode: 200,
        message: `Metadata Fetched successfully`,
      })

    } catch (error) {
      return response.status(400).json({
        error,
        label: `Metadata Fetching`,
        statusCode: 400,
        message: `We were unable to fetch Metadata`,
      })
    }
  }
}
module.exports = MetadatumController
