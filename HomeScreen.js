import React from 'react';
import { View, Text, FlatList, Image, TextInput, StyleSheet } from 'react-native';

const JobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </View>
  );
};

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '2', title: 'Frontend Developer', company: 'Google', salary: '$160,000', location: 'San Francisco, US' },
    { id: '3', title: 'Backend Developer', company: 'Amazon', salary: '$150,000', location: 'Seattle, US' },
    { id: '4', title: 'Full Stack Developer', company: 'Apple', salary: '$170,000', location: 'Cupertino, US' },
    { id: '5', title: 'DevOps Engineer', company: 'Microsoft', salary: '$175,000', location: 'Redmond, US' },
    { id: '6', title: 'Data Scientist', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '7', title: 'Machine Learning Engineer', company: 'Google', salary: '$160,000', location: 'San Francisco, US' },
    { id: '8', title: 'AI Engineer', company: 'Amazon', salary: '$150,000', location: 'Seattle, US' },
  ];

  const popularJobs = [
    { id: '1', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '2', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US' },
    { id: '3', title: 'Product Manager', company: 'Beats', salary: '$86,000/y', location: 'Florida, US' },
    { id: '4', title: 'Sales Manager', company: 'Nike', salary: '$90,000/y', location: 'Portland, US' },
    { id: '5', title: 'Marketing Director', company: 'Adidas', salary: '$95,000/y', location: 'Berlin, Germany' },
    { id: '6', title: 'HR Manager', company: 'Puma', salary: '$88,000/y', location: 'Munich, Germany' },
    { id: '7', title: 'IT Support', company: 'Sony', salary: '$75,000/y', location: 'Tokyo, Japan' },
    { id: '8', title: 'Network Engineer', company: 'Cisco', salary: '$85,000/y', location: 'San Jose, US' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search a job or position" />
        <Text style={styles.listIcon}>☰</Text>
      </View>
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        horizontal
        data={featuredJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  listIcon: {
    marginLeft: 10,
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 14,
    color: 'gray',
  },
  salary: {
    fontSize: 14,
  },
  location: {
    fontSize: 12,
    color: 'gray',
  },
});

export default HomeScreen;
