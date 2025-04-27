"use client"
import { gql } from "@apollo/client"
import AnnouncementsPage from "#/components/blog/announcements/AnnouncementsPage"

const FindAnnouncementsQuery = gql`
  query FindAnnouncements($pagination: AnnouncementsPaginationInput!) {
    announcements(pagination: $pagination) {
      total
      data {
        uid
        title
        content
        status
        createAt
        updateAt
      }
    }
  }
`

const CreateAnnouncementMutation = gql`
  mutation CreateAnnouncement($createAnnouncementInput: CreateAnnouncementInput!) {
    createAnnouncement(createAnnouncementInput: $createAnnouncementInput) {
      uid
      title
    }
  }
`

const UpdateAnnouncementMutation = gql`
  mutation UpdateAnnouncement($updateAnnouncementInput: UpdateAnnouncementInput!) {
    updateAnnouncement(updateAnnouncementInput: $updateAnnouncementInput) {
      uid
      title
    }
  }
`

const RemoveAnnouncementMutation = gql`
  mutation RemoveAnnouncement($uid: String!) {
    removeAnnouncement(uid: $uid) {
      uid
    }
  }
`

export default function AnnouncementsListPage() {
  return <AnnouncementsPage 
    queries={{
      find: FindAnnouncementsQuery,
      create: CreateAnnouncementMutation,
      update: UpdateAnnouncementMutation,
      remove: RemoveAnnouncementMutation,
    }}
  />
} 