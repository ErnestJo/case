<template>
   <div>
    <div class="breadcrumb  ">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/calendar" class="active">Working calendar</router-link>
    </div>
    <v-card>
      <v-toolbar dark flat color="primary">
        <v-toolbar-title>
          <strong>Events</strong>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="800"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="button" v-bind="attrs" v-on="on"
              ><v-icon left>mdi-plus</v-icon> new events</v-btn
            >
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-toolbar flat color="primary" dark>Add new event</v-toolbar>

                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        autofocus
                        v-model="event.name"
                        label="Event name"
                        clearable
                        outlined
                        :rules="[v => !!v || 'Field is required']"
                        required
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        name="input-7-1"
                        v-model="event.description"
                        label="Event description"
                        hint="Description"
                        filled
                        :rules="[v => !!v || 'Field is required']"
                        required
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="dates"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-combobox
                            v-model="dates"
                            multiple
                            chips
                            small-chips
                            label="Selet event start date and end date"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          ></v-combobox>
                        </template>
                        <v-date-picker
                          v-model="dates"
                          multiple
                          no-title
                          scrollable
                          range
                          reactive
                          :min="nowDate"
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            text
                            class="button cancel"
                            @click="menu = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            class="button"
                            @click="$refs.menu.save(dates)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col sm="12" md="6">
                      <v-checkbox
                        v-model="event.timed"
                        :label="`Is Timed event: ${event.timed}`"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        type="time"
                        id="appt"
                        name="appt"
                        v-if="event.timed"
                        label="Start time"
                        v-model="event.startTime"
                      ></v-text-field>
                      <!--<v-menu
                        ref="start"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-right="40"
                        :return-value.sync="event.startTime"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="event.startTime"
                            label="Start time"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            :rules="[v => !!v || 'Field is required']"
                            required
                          ></v-text-field>
                        </template>
                        <v-time-picker
                          v-if="menu2"
                          v-model="event.startTime"
                          full-width
                          ampm-in-title
                          @click:minute="$refs.start.save(event.startTime)"
                        ></v-time-picker>
                      </v-menu>-->
                    </v-col>
                    <v-spacer></v-spacer>

                    <v-col cols="11" sm="12" md="6">
                      <v-text-field
                        type="time"
                        id="appt"
                        name="appt"
                        v-if="event.timed"
                        label="End time"
                        v-model="event.endTime"
                        required
                        min="12:00"
                        max="18:00"
                      ></v-text-field>
                      <!--<v-dialog
                        ref="dialog"
                        v-model="modal2"
                        :return-value.sync="event.endTime"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="event.endTime"
                            label="End time"
                            prepend-icon="mdi-clock-time-four-outline"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            :rules="[v => !!v || 'Field is required']"
                            required
                          ></v-text-field>
                        </template>

                        <v-time-picker
                          v-if="modal2"
                          v-model="event.endTime"
                          full-width
                        >
                          <v-spacer></v-spacer>
                          <v-btn text color="primary" @click="modal2 = false">
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(event.endTime)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>-->
                    </v-col>
                  </v-row>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn @click="dialog.value = false" class="button cancel"
                    >Cancel</v-btn
                  >
                  <v-btn
                    v-if="edit"
                    @click="update_calendar_event"
                    class="button"
                    >Update</v-btn
                  >
                  <v-btn v-else @click="save_event" class="button">Save</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </template>
        </v-dialog>
      </v-toolbar>
      <v-card-text>
        <v-row class="fill-height">
          <v-col>
            <v-sheet height="64">
              <v-toolbar flat>
                <v-btn
                  outlined
                  class="mr-4"
                  color="grey darken-2"
                  @click="setToday"
                >
                  Today
                </v-btn>
                <v-btn fab text small color="grey darken-2" @click="prev">
                  <v-icon small>
                    mdi-chevron-left
                  </v-icon>
                </v-btn>
                <v-btn fab text small color="grey darken-2" @click="next">
                  <v-icon small>
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu bottom right>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      outlined
                      color="grey darken-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span>{{ typeToLabel[type] }}</span>
                      <v-icon right>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="type = 'day'">
                      <v-list-item-title>Day</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                      <v-list-item-title>Week</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                      <v-list-item-title>Month</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = '4day'">
                      <v-list-item-title>4 days</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
              <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                :event-height="30"
                :events="events"
                :event-color="getEventColor"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="viewDay"
                @change="updateRange"
              ></v-calendar>
              <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                offset-x
              >
                <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
                  v-if="selectedEvent.eventSummary"
                >
                  <v-toolbar :color="selectedEvent.color" dark>
                    <v-toolbar-title
                      v-html="selectedEvent.name"
                    ></v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-btn
                      icon
                      v-if="selectedEvent.eventSummary.editable"
                      @click="initiate_update(selectedEvent)"
                    >
                      <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      v-if="selectedEvent.eventSummary.editable"
                      @click="
                        delete_calendar_event(selectedEvent.eventSummary.id)
                      "
                    >
                      <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-text>
                    <span>{{ selectedEvent.eventSummary.description }}</span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="secondary" @click="selectedOpen = false">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>  
</template>

<script>
export default {
    data: () => ({
    focus: "",
    dates: [],
    type: "month",
    time: null,
    menu: false,
    menu2: false,
    modal2: false,
    valid: true,
    dialog: false,
    edit: false,
    updateId: null,
    nowDate: new Date().toISOString().slice(0, 10),
    today: new Date().toISOString(),
    timeNow: new Date().toTimeString().split(" ")[0],
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days"
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    event: {
      name: null,
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      timed: true,
      description: null,
      departmentId: null
    },
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1"
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party"
    ]
  }),

}
</script>

<style>

</style>
