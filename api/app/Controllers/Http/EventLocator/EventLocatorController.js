'use strict';
const getUserStatus = use("App/Helpers/getUserInfo")
const churchEventsLocator = use("App/Models/EventLocator");
const branchInfo = use("App/Models/BranchInfo");


class EventLocatorController {
    async createEvent({ request, response, auth }){
        try {
            const {
                event_title,
                event_theme,
                event_body,
                event_start_date,
                event_end_date
            } = request.all()
            const { user } = auth.current;

            const userDetails  = await getUserStatus.getUserDenominationInfo(user);
            
            // console.log("request title and body", request_title,request_body , recipient_id );
            const churchEventCreation = await churchEventsLocator.create({
                denomination_id:userDetails.denomination_id,
                branch_id: userDetails.branch_id,
                event_title,
                event_theme,
                event_body,
                event_start_date,
                event_end_date
            });
      
            if (!churchEventCreation) {
              return response.status(400).json({
                label: `Event Creation `,
                statusCode: 400,
                message: `There was an error creating Event.`,
              });
            }
            response.status(200).json({
              label: "Event Creation",
              message: "Event Creation successful.",
              data: churchEventCreation,
            });
          } catch (error) {
            console.log(error);
            return response.status(200).json({
              error,
              label: `Event Creation`,
              statusCode: 500,
              message: `Internal Server Error`,
            });
          }
    }

      //   view Requests sent
  async viewDenominationEvents({  response, auth }) {
    try {
      const { user } = auth.current;
      const userDetails  = await getUserStatus.getUserDenominationInfo(user);

      const churchEvents = await churchEventsLocator.query()
      .where("denomination_id" ,userDetails.denomination_id )
      .fetch()

      if (!churchEvents) {
        return response.status(400).json({
          label: `View Church Events`,
          statusCode: 400,
          message: `There was an error fetching Denomination Events.`,
        });
      }
      response.status(200).json({
        label: "View Church Events",
        message: "Denomination Events fetched successfully.",
        data: churchEvents,
      });
    } catch (ViewEventsError) {
      console.log(ViewEventsError);
      return response.status(200).json({
        ViewEventsError,
        label: `View Church Events`,
        statusCode: 500,
        message: `Internal Server Error`,
      });
    }
  }

      //   view user branch  Events
      async viewBranchEvents({  response, auth }) {
        try {
          const { user } = auth.current;
          const userDetails  = await getUserStatus.getUserDenominationInfo(user);
    
          const churchEvents = await churchEventsLocator.query()
          .where("branch_id" ,userDetails.branch_id )
          .fetch()
    
          if (!churchEvents) {
            return response.status(400).json({
              label: `View Church Events`,
              statusCode: 400,
              message: `There was an error fetching Branch Events.`,
            });
          }
          response.status(200).json({
            label: "View Church Events",
            message: "Branch Events fetched successfully.",
            data: churchEvents,
          });
        } catch (ViewEventsError) {
          console.log(ViewEventsError);
          return response.status(200).json({
            ViewEventsError,
            label: `View  Church Events`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
      }

      // viewAllEvents from evey denomination
      async viewAllEvents({  response, auth }) {
      try {
        const { user } = auth.current;      
        const churchEvents = await churchEventsLocator.all()
  
        if (!churchEvents) {
          return response.status(400).json({
            label: `View Church Events`,
            statusCode: 400,
            message: `There was an error fetching All Events.`,
          });
        }
        response.status(200).json({
          label: "View Church Events",
          message: "All Events fetched successfully.",
          data: churchEvents,
        });
      } catch (ViewEventsError) {
        console.log(ViewEventsError);
        return response.status(200).json({
          ViewEventsError,
          label: `View All Church Events`,
          statusCode: 500,
          message: `Internal Server Error`,
        });
      }
    }


      // view all user denomination locations
      async getDenominationLocations({  response, auth }) {
        try {
          const { user } = auth.current; 
          const userDetails  = await getUserStatus.getUserDenominationInfo(user);
          console.log("userDetails", userDetails);
          const churchDenominationLocations = await branchInfo.query()
          .where("id", userDetails.branch_id)
          .fetch()
          
    
          if (!churchDenominationLocations) {
            return response.status(400).json({
              label: `View Church DenominationLocations`,
              statusCode: 400,
              message: `There was an error fetching denomination Locations.`,
            });
          }
          response.status(200).json({
            label: "View Church Events",
            message: " Locations fetched successfully.",
            data: churchDenominationLocations,
          });
        } catch (ViewLocationsError) {
          console.log(ViewLocationsError);
          return response.status(200).json({
            ViewLocationsError,
            label: `View  Church Locations`,
            statusCode: 500,
            message: `Internal Server Error`,
          });
        }
      }
        // view all user denomination locations
        async getAllLocations({  response, auth }) {
          try {
            const { user } = auth.current; 
            const userDetails  = await getUserStatus.getUserDenominationInfo(user);
            console.log("userDetails", userDetails);
            const churchDenominationLocations = await branchInfo.query()
            .where("id", userDetails.branch_id)
            .fetch()
            
      
            if (!churchDenominationLocations) {
              return response.status(400).json({
                label: `View Church DenominationLocations`,
                statusCode: 400,
                message: `There was an error fetching denomination Locations.`,
              });
            }
            response.status(200).json({
              label: "View Church Events",
              message: " Locations fetched successfully.",
              data: churchDenominationLocations,
            });
          } catch (ViewLocationsError) {
            console.log(ViewLocationsError);
            return response.status(200).json({
              ViewLocationsError,
              label: `View  Church Locations`,
              statusCode: 500,
              message: `Internal Server Error`,
            });
          }
        }
        
}

module.exports = EventLocatorController
