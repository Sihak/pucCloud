import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import { COLORS, DIMENSION, APPEARANCES, ICONS } from "../../module";
import ProgramComponent from "./program";
import { observer, inject } from "mobx-react";
import LoadingComponent from "../../component/loading";
import IconButton from "../../component/IconButton";
import Slide from "../../component/Slide";
import Card from "../../component/Card";
import PrimaryCard from "../../component/PrimaryCard";
import SmallCard from "../../component/SmallCard";
import ListCard from "../../component/ListCard";

@inject("programs", "user", "environment")
@observer
class ProgramScreen extends Component {
  componentDidMount() {
    this.props.programs.fetchPrograms();
    this.props.user.getCurrentUser();
  }

  onProgram(program) {
    const { user } = this.props.user;
    this.props.navigation.navigate(user ? "Register" : "LoginSignUp", {
      program: program
    });
  }

  _renderHeader = () => {
    const { loading } = this.props.programs;
    const { data } = this.props.environment;
    if (!loading)
      return (
        <View style={styles.listHeader}>
          <Slide />

          <Text style={styles.listHeaderText}>Testing Center</Text>
        </View>
      );
    return <View />;
  };

  render() {
    const { programs, loading } = this.props.programs;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={[styles.header]}>
            <Image source={ICONS.LOGO} style={styles.avatar} />
            <View style={styles.brandName}>
              <Text style={styles.headerTittle}>Paññāsāstra University</Text>
              <Text style={styles.headerTittle}>of Cambodia</Text>
            </View>
            <IconButton icon="search" />
          </View>

          <View
            style={[
              styles.body,
              loading && {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff"
              }
            ]}
          >
            {loading ? (
              <LoadingComponent />
            ) : (
              <ScrollView style={styles.full}>
                <FlatList
                  scrollEnabled={false}
                  numColumns={2}
                  style={[styles.programs, APPEARANCES.SHADOW]}
                  data={programs.slice()}
                  keyExtractor={(item, index) => index.toString()}
                  ListHeaderComponent={this._renderHeader}
                  renderItem={({ index, item }) => {
                    return (
                      <View style={styles.item}>
                        <ProgramComponent
                          onPress={program => this.onProgram(program)}
                          {...item}
                        />
                      </View>
                    );
                  }}
                />
                <View style={styles.overview}>
                  <SmallCard image={ICONS.ENGLISH} title='English Programs' />
                </View>
                <View style={styles.overview}>
                  <SmallCard image={ICONS.ABC} title='ABC Course'/>
                </View>
                <View>
                  <Text style={[styles.title, styles.pending]}>
                  Academic Programs
                  </Text>
                  <ScrollView horizontal={true} style={styles.overview}>
                    <Card
                      color={COLORS.SCHOOL_FEE}
                      title={'Undergraduate'.toUpperCase()}
                      text="Schedule for Bachelor Morning"
                      icon="book-open"
                    />
                    <Card
                      color={COLORS.PURPLE_LINE}
                      title="Undergraduate"
                      text="Schedule for Bachelor Morning Afternoon"
                      icon="graduation"
                    />
                    <Card
                      color={COLORS.BLUE_LINE}
                      title="Undergraduate"
                      text="Schedule for Bachelor Morning Evening"
                      icon="globe-alt"
                    />
                    <Card
                      color={COLORS.GREEN_LINE}
                      title="Undergraduate"
                      text="Schedule for Bachelor Weekend"
                      icon="event"
                    />
                    <View style={styles.blank} />
                  </ScrollView>
                </View>

                <View style={styles.overview}>
                  <PrimaryCard image={ICONS.GRADUATE} />
                </View>
                <View style={styles.overview}>
                  <ListCard />
                </View>

                <View style={styles.blankBottom} />
              </ScrollView>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  education: {
    paddingVertical: DIMENSION(5),
    backgroundColor: "#fff",
    marginVertical: DIMENSION(5)
  },
  pending: {
    paddingHorizontal: DIMENSION(5)
  },
  blankBottom: {
    height: DIMENSION(10)
  },
  blank: {
    width: DIMENSION(5)
  },
  overview: {
    padding: DIMENSION(5),
    paddingTop: 0
  },
  item: {
    paddingLeft: DIMENSION(5)
  },
  full: {
    flexDirection: "column",
    flex: 1
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginRight: 10
  },
  brandName: {
    flexDirection: "column",
    flex: 1
  },
  programs: {
    flex: 1
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    width: DIMENSION(100),
    // height: DIMENSION(15),
    paddingHorizontal: DIMENSION(5),
    paddingBottom: DIMENSION(3),
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: COLORS.BACKGROUND,
    borderBottomWidth: 1,
    borderColor: COLORS.BORDER_COLOR
  },
  headerTittle: {
    fontSize: 17,
    fontWeight: "800",
    color: COLORS.TEXT_DARK
  },
  notificationIcon: {
    fontSize: 32,
    fontWeight: "800",
    color: COLORS.TEXT_DARK
  },
  listHeader: {
    // paddingVertical: DIMENSION(5)
  },
  listHeaderText: {
    fontSize: 22,
    fontWeight: "800",
    margin: DIMENSION(5)
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: DIMENSION(5)
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND
  }
});
export default ProgramScreen;
